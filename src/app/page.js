"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag, Gift, CreditCard, Copy } from "lucide-react";
import { toast } from "react-toastify";

export default function OffersPage() {
  const sitewideCoupons = [
    { code: "LONGSTAY", value: "₹1,500", desc: "15% off when you book for 5 days or more and 20% off when you book for 30 days or more." },
    { code: "EARLYBIRD", value: "₹3,000", desc: "15% off when you book for 5 days or more and 20% off when you book for 30 days or more." },
    { code: "RUSHDEAL", value: "Flat 10%", desc: "15% off when you book for 5 days or more and 20% off when you book for 30 days or more." },
  ];

  const giftCards = [
    { brand: "SPACEZ", value: "₹1,500", condition: "Get this gift voucher on booking above ₹1,500" },
    { brand: "MYNTRA", value: "₹1,500", condition: "Get this gift voucher on booking above ₹2,000" },
    { brand: "HAMMER", value: "₹1,000", condition: "Get this gift voucher on booking above ₹1,500" },
  ];

  const paymentOffers = [
    { bank: "HDFC BANK", offer: "10% OFF", condition: "Get 10% off on booking above ₹1,500" },
  ];

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    toast.success("Coupon Copied");
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b">
        <h1 className="text-2xl font-bold text-orange-700">SPACEZ</h1>
        <button className="text-gray-600">☰</button>
      </header>

      {/* Tabs */}
      <Tabs defaultValue="coupons" className="w-full px-3">
        <TabsList className="grid grid-cols-3 w-full mt-4 bg-orange-50">
          <TabsTrigger value="coupons">Coupons</TabsTrigger>
          <TabsTrigger value="giftcards">Giftcards</TabsTrigger>
          <TabsTrigger value="payments">Payment Offers</TabsTrigger>
        </TabsList>

        {/* Coupons */}
        <TabsContent value="coupons" className="space-y-4 mt-4">
          <p className="text-center text-sm text-gray-600">
            Sign in to unlock exclusive additional rewards
          </p>
          <div className="flex justify-center">
            <Button className="bg-orange-700 hover:bg-orange-800">Sign In</Button>
          </div>

          <h2 className="font-semibold text-lg mt-6 flex items-center gap-2 text-orange-800">
            <Tag size={18} /> Sitewide Coupons
          </h2>
          {sitewideCoupons.map((item, i) => (
            <Card key={i} className="border-l-4 border-orange-600">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg">{item.code}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                    <p className="font-semibold mt-2">{item.value}</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="mt-2 text-orange-700 border-orange-700 hover:bg-orange-700 hover:text-white"
                      onClick={()=>handleCopy(item.code)}
                    >
                      Copy <Copy className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Giftcards */}
        <TabsContent value="giftcards" className="space-y-4 mt-4">
          <h2 className="font-semibold text-lg flex items-center gap-2 text-orange-800">
            <Gift size={18} /> Bonus Gift Cards
          </h2>
          {giftCards.map((card, i) => (
            <Card key={i} className="border-l-4 border-pink-600">
              <CardContent className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">{card.brand}</h3>
                  <p className="text-sm text-gray-600">{card.condition}</p>
                  <p className="font-semibold mt-2">{card.value}</p>
                </div>
                <Button onClick={()=>handleCopy(card.brand)} className="bg-orange-700 hover:bg-orange-800">Collect</Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Payment Offers */}
        <TabsContent value="payments" className="space-y-4 mt-4">
          <h2 className="font-semibold text-lg flex items-center gap-2 text-orange-800">
            <CreditCard size={18} /> Payment Offers
          </h2>
          {paymentOffers.map((offer, i) => (
            <Card key={i} className="border-l-4 border-blue-600">
              <CardContent className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">{offer.bank}</h3>
                  <p className="text-sm text-gray-600">{offer.condition}</p>
                  <p className="font-semibold text-blue-600 mt-1">{offer.offer}</p>
                </div>
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Bottom Navbar */}
      <nav className="m-5 rounded-full border-t bg-white py-2 border-red-500 border-2 flex justify-evenly text-sm text-gray-600">
        {["Explore", "Offers", "Bookings", "Wishlist", "Profile"].map((nav, i) => (
          <button key={i} className={`flex lg:text-2xl flex-col items-center ${nav === "Offers" ? "text-orange-700 font-bold" : ""}`}>
            <span>{nav}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
