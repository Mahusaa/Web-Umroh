

import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { format } from "date-fns"
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Input } from "../ui/input";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import { cn } from "~/lib/utils";
import { Checkbox } from "../ui/checkbox";
import { Calendar as CalendarIcon } from "lucide-react"



//This is MKM Format
// type Hotel = {
//   name: string;
//   doublePrice: number;
//   triplePrice: number;
//   quadPrice: number;
// };


export function Form2() {
  // const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [tanggalMasuk, setTanggalMasuk] = useState<Date>()
  const [tanggalKeluar, setTanggalKeluar] = useState<Date>()
  const formatRupiah = (number: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(number);
  };
  const vendor = ["MKM", "ALH", "HVN", "ALK"]
  const hotelBintang = ["3", "4", "5"]
  const hotelMadinah = [
    { name: "SAMA AL MASI", doublePrice: 838500, triplePrice: 616333, quadPrice: 505250 },
    { name: "JAWHARAT RASHEED", doublePrice: 774000, triplePrice: 573333, quadPrice: 473000 },
    { name: "HAYAH PLAZA", doublePrice: 817000, triplePrice: 602000, quadPrice: 494500 },
    { name: "AL MADINAH CONCORDE", doublePrice: 913750, triplePrice: 673667, quadPrice: 553625 },
    { name: "RUA INTERNATIONAL", doublePrice: 924500, triplePrice: 680833, quadPrice: 559000 },
    { name: "DAR AL NAEM", doublePrice: 956750, triplePrice: 702333, quadPrice: 575125 },
    { name: "SAFWAT AL MADINAH", doublePrice: 1032000, triplePrice: 752500, quadPrice: 612750 },
    { name: "GRAND PLAZA", doublePrice: 1053500, triplePrice: 802667, quadPrice: 666500 },
    { name: "FRONT TAIBA", doublePrice: 1548000, triplePrice: 1211167, quadPrice: 1042750 },
    { name: "AL AQEEQ", doublePrice: 1612500, triplePrice: 1247000, quadPrice: 1064250 },
    { name: "AL HARAM DAR ELIMAN", doublePrice: 1784500, triplePrice: 1368833, quadPrice: 1268500 },
    { name: "HILTON MADINAH", doublePrice: 3674350, triplePrice: 3167667, quadPrice: 2741250 }
  ];
  const hotelMakkah = [
    { name: "AKABER AL HIJRAH", doublePrice: 537500, triplePrice: 415667, quadPrice: 365500 },
    { name: "SNOOD AJYAD", doublePrice: 903000, triplePrice: 659333, quadPrice: 537500 },
    { name: "GRAND AL MASSA", doublePrice: 1053500, triplePrice: 774000, quadPrice: 634250 },
    { name: "RAYYANA AJYAD", doublePrice: 1419000, triplePrice: 960333, quadPrice: 827750 },
    { name: "MARRIOT JABAL OMAR", doublePrice: 1419000, triplePrice: 1089333, quadPrice: 924500 },
    { name: "MAKAREM AJYAD", doublePrice: 1419000, triplePrice: 1132333, quadPrice: 989000 },
    { name: "SOFWAH DURRAR AL EIMAN", doublePrice: 2107000, triplePrice: 1662667, quadPrice: 1424375 },
    { name: "PULLMAN ZAM ZAM", doublePrice: 2322000, triplePrice: 1755833, quadPrice: 1558750 },
    { name: "HYAT REGENCY MAKKAH", doublePrice: 2472500, triplePrice: 2078333, quadPrice: 1881250 }
  ];
  return (
    <div className="w-full flex justify-center items-center flex-col space-y-4">
      {/*Checkbox*/}
      <div className="w-full flex justify-end space-x-2">
        <Checkbox id="terms1" />
        <div className="grid gap-1.5 leading-none">
          <Label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Makkah Dulu
          </Label>
        </div>
      </div>

      <Label className="font-bold">Madinah </Label>

      {/*Vendor*/}
      <div className="w-full max-w-[600px]">
        <Label>Pilih Vendor</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Vendor" />
          </SelectTrigger>
          <SelectContent>
            {vendor.map((vendor, idx) => (
              <SelectItem key={idx} value={vendor}>
                {vendor}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/*Hotel Bintang*/}
      <div className="w-full max-w-[600px]">
        <Label>Hotel Bintang</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Hotel Bintang" />
          </SelectTrigger>
          <SelectContent>
            {hotelBintang.map((bintang, idx) => (
              <SelectItem key={idx} value={bintang}>
                {bintang}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/*Hotel Madinah*/}
      <div className="w-full max-w-[600px]">
        <Label>Hotel Madinah</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Pilih Hotel Madinah" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Tidak">Tidak - Rp 0</SelectItem>
            {hotelMadinah.map((hotel, idx) => (
              <SelectItem key={idx} value={hotel.name}>
                {hotel.name} {formatRupiah(hotel.quadPrice)} - {formatRupiah(hotel.doublePrice)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/*Room Type*/}
      <div className="w-full max-w-[600px]">
        <Label>Tipe Kamar</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Pilih Tipe Kamar" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="double">Double</SelectItem>
            <SelectItem value="tripple">Tripple</SelectItem>
            <SelectItem value="quad">Quad</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full max-w-[600px]  flex flex-row space-x-4">
        <div className="w-1/2">
          <Label>Tanggal Masuk</Label>
          <Popover>
            <PopoverTrigger asChild className="w-full">
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !tanggalMasuk && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {tanggalMasuk ? format(tanggalMasuk, "PPP") : <span>Pilih Tanggal</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={tanggalMasuk}
                onSelect={setTanggalMasuk}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="w-1/2">
          <Label>Tanggal Keluar</Label>
          <Popover>
            <PopoverTrigger asChild className="w-full">
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !tanggalKeluar && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {tanggalKeluar ? format(tanggalKeluar, "PPP") : <span>Pilih Tanggal</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={tanggalKeluar}
                onSelect={setTanggalKeluar}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>


      <Label className="font-bold justify-start">Makkah</Label>
      {/*Vendor*/}
      <div className="w-full max-w-[600px] mt-6">
        <Label>Pilih Vendor</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Vendor" />
          </SelectTrigger>
          <SelectContent>
            {vendor.map((vendor, idx) => (
              <SelectItem key={idx} value={vendor}>
                {vendor}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/*Hotel Bintang*/}
      <div className="w-full max-w-[600px]">
        <Label>Hotel Bintang</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Hotel Bintang" />
          </SelectTrigger>
          <SelectContent>
            {hotelBintang.map((bintang, idx) => (
              <SelectItem key={idx} value={bintang}>
                {bintang}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/*Hotel Madinah*/}
      <div className="w-full max-w-[600px]">
        <Label>Hotel Makkah</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Pilih Hotel Makkah" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Tidak">Tidak - Rp 0</SelectItem>
            {hotelMakkah.map((hotel, idx) => (
              <SelectItem key={idx} value={hotel.name}>
                {hotel.name} {formatRupiah(hotel.quadPrice)} - {formatRupiah(hotel.doublePrice)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/*Room Type*/}
      <div className="w-full max-w-[600px]">
        <Label>Tipe Kamar</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Pilih Tipe Kamar" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="double">Double</SelectItem>
            <SelectItem value="tripple">Tripple</SelectItem>
            <SelectItem value="quad">Quad</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full max-w-[600px]  flex flex-row space-x-4">
        <div className="w-1/2">
          <Label>Tanggal Masuk</Label>
          <Popover>
            <PopoverTrigger asChild className="w-full">
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !tanggalMasuk && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {tanggalMasuk ? format(tanggalMasuk, "PPP") : <span>Pilih Tanggal</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={tanggalMasuk}
                onSelect={setTanggalMasuk}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="w-1/2">
          <Label>Tanggal Keluar</Label>
          <Popover>
            <PopoverTrigger asChild className="w-full">
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !tanggalKeluar && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {tanggalKeluar ? format(tanggalKeluar, "PPP") : <span>Pilih Tanggal</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={tanggalKeluar}
                onSelect={setTanggalKeluar}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>







    </div>

  )

}
