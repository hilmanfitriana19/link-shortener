import { useState, useEffect } from 'react';
import {
  User,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
} from 'firebase/auth';
import { auth, googleProvider, db } from '../config/firebase';
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        try {
          const snap = await getDoc(doc(db, 'users', user.uid));
          setUsername(snap.exists() ? snap.data().username ?? null : null);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        setUsername(null);
      }
      setLoading(false);
    });

    // Handle redirect result in case signInWithPopup is blocked
    getRedirectResult(auth).catch((error) => {
      console.error('Error handling redirect result:', error);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user) {
      setUsername(null);
      return;
    }

    const saveUser = async () => {
      try {
        const userRef = doc(db, 'users', user.uid);
        const snap = await getDoc(userRef);
        if (snap.exists()) {
          await setDoc(
            userRef,
            {
              displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
              updatedAt: Timestamp.now(),
            },
            { merge: true }
          );
          setUsername(snap.data().username ?? null);
        } else {
          await setDoc(userRef, {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            createdAt: Timestamp.now(),
            updatedAt: Timestamp.now(),
          });
          setUsername(null);
        }
      } catch (error) {
        console.error('Error saving user data:', error);
      }
    };

    saveUser();
  }, [user]);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Popup sign-in failed, falling back to redirect:', error);
      try {
        await signInWithRedirect(auth, googleProvider);
      } catch (redirectError) {
        console.error('Error signing in with redirect:', redirectError);
      }
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const updateUsername = async (newUsername: string) => {
    if (!user) return;
    try {
      const userRef = doc(db, 'users', user.uid);
      await setDoc(
        userRef,
        { username: newUsername, updatedAt: Timestamp.now() },
        { merge: true }
      );
      setUsername(newUsername);
    } catch (error) {
      console.error('Error updating username:', error);
    }
  };

  return { user, loading, username, signInWithGoogle, logout, updateUsername };
};