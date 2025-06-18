import { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  where, 
  orderBy, 
  onSnapshot, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  increment,
  Timestamp 
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { Link } from '../types';

export const useLinks = (userId: string | null) => {
  const [links, setLinks] = useState<Link[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLinks([]);
      setLoading(false);
      return;
    }

    const q = query(
      collection(db, 'links'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const linksData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date(),
      })) as Link[];

      setLinks(linksData);
      setLoading(false);
    });

    return unsubscribe;
  }, [userId]);

  const createLink = async (linkData: Omit<Link, 'id' | 'createdAt' | 'updatedAt' | 'clicks'>) => {
    if (!userId) return;

    try {
      await addDoc(collection(db, 'links'), {
        ...linkData,
        userId,
        clicks: 0,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      });
    } catch (error) {
      console.error('Error creating link:', error);
      throw error;
    }
  };

  const updateLink = async (linkId: string, updates: Partial<Link>) => {
    try {
      await updateDoc(doc(db, 'links', linkId), {
        ...updates,
        updatedAt: Timestamp.now(),
      });
    } catch (error) {
      console.error('Error updating link:', error);
      throw error;
    }
  };

  const deleteLink = async (linkId: string) => {
    try {
      await deleteDoc(doc(db, 'links', linkId));
    } catch (error) {
      console.error('Error deleting link:', error);
      throw error;
    }
  };

  const incrementClicks = async (linkId: string) => {
    try {
      await updateDoc(doc(db, 'links', linkId), {
        clicks: increment(1),
        updatedAt: Timestamp.now(),
      });
    } catch (error) {
      console.error('Error incrementing clicks:', error);
    }
  };

  return {
    links,
    loading,
    createLink,
    updateLink,
    deleteLink,
    incrementClicks
  };
};