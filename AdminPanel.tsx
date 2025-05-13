'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AdminPanel() {
  const [title, setTitle] = useState('');
  const [user, setUser] = useState('');
  const [ilanlar, setIlanlar] = useState<any[]>([]);

  useEffect(() => {
    fetchIlanlar();
  }, []);

  async function fetchIlanlar() {
    const { data, error } = await supabase.from('ilanlar').select('*').order('id', { ascending: false });
    if (!error) setIlanlar(data);
  }

  async function handleEkle() {
    if (!title || !user) return;
    await supabase.from('ilanlar').insert([{ title, user, status: 'Bekliyor' }]);
    setTitle('');
    setUser('');
    fetchIlanlar();
  }

  return (
    <div className="p-4 text-white bg-black min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <input
        placeholder="İlan Başlığı"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 bg-gray-800 rounded mr-2"
      />
      <input
        placeholder="Kullanıcı"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className="p-2 bg-gray-800 rounded mr-2"
      />
      <button onClick={handleEkle} className="p-2 bg-green-600 rounded">Ekle</button>

      <div className="mt-6 space-y-4">
        {ilanlar.map((ilan) => (
          <div key={ilan.id} className="p-4 bg-gray-900 rounded">
            <p><strong>İlan:</strong> {ilan.title}</p>
            <p><strong>Kullanıcı:</strong> {ilan.user}</p>
            <p><strong>Durum:</strong> {ilan.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
