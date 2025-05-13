// Admin Panel - Findemarkt24 (Geliştirilmiş Sürüm)
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [ads, setAds] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setUsers([
      { id: 1, name: 'Ali Kaya', email: 'ali@example.com', status: 'active' },
      { id: 2, name: 'Zeynep Yılmaz', email: 'zeynep@example.com', status: 'banned' },
    ]);
    setAds([
      { id: 101, title: 'BMW 3er', user: 'Ali Kaya', status: 'pending' },
      { id: 102, title: 'iPhone 14', user: 'Zeynep Yılmaz', status: 'active' },
    ]);
  }, []);

  const handleApproveAd = (id) => {
    setAds((prev) => prev.map((ad) => ad.id === id ? { ...ad, status: 'active' } : ad));
  };

  const handleBanUser = (id) => {
    setUsers((prev) => prev.map((user) => user.id === id ? { ...user, status: 'banned' } : user));
  };

  const handleDeleteAd = (id) => {
    setAds((prev) => prev.filter((ad) => ad.id !== id));
  };

  const filteredAds = filter === 'all' ? ads : ads.filter(ad => ad.status === filter);

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Admin Panel</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Kullanıcılar</h2>
        <div className="grid gap-2">
          {users.map((user) => (
            <Card key={user.id}>
              <CardContent className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{user.name} ({user.email})</p>
                  <p className="text-sm">Durum: {user.status}</p>
                </div>
                {user.status !== 'banned' && (
                  <Button variant="destructive" onClick={() => handleBanUser(user.id)}>
                    Banla
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">İlanlar</h2>

        <Tabs value={filter} onValueChange={setFilter} className="mb-4">
          <TabsList>
            <TabsTrigger value="all">Tümü</TabsTrigger>
            <TabsTrigger value="pending">Bekliyor</TabsTrigger>
            <TabsTrigger value="active">Aktif</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid gap-2">
          {filteredAds.map((ad) => (
            <Card key={ad.id}>
              <CardContent className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{ad.title} - {ad.user}</p>
                  <p className="text-sm">Durum: {ad.status}</p>
                </div>
                <div className="flex gap-2">
                  {ad.status === 'pending' && (
                    <Button onClick={() => handleApproveAd(ad.id)}>Onayla</Button>
                  )}
                  <Button variant="destructive" onClick={() => handleDeleteAd(ad.id)}>Sil</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
