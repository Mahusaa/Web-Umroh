import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { format } from "date-fns"
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Input } from "../ui/input";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import { cn } from "~/lib/utils";
import { Calendar as CalendarIcon } from "lucide-react"


export function Form1() {
  const [tanggalPulang, setTanggalPulang] = useState<Date>()
  const [tanggalBerangkat, setTanggalBerangkat] = useState<Date>()
  const periodeRange = [
    { startDate: "01 Sept 2024", endDate: "30 OKT 2024" },
    { startDate: "01 Nov 2024", endDate: "10 DES 2024" },
    { startDate: "11 DES 2024", endDate: "11 JAN 2025" },
    { startDate: "11 JAN 2025", endDate: "28 FEB 2025" },
    { startDate: "01 MAR 2025", endDate: "21 MAR 2025" },
    { startDate: "22 MAR 2025", endDate: "31 MAR 2025" },
    { startDate: "01 APR 2025", endDate: "30 APR 2025" }
  ];
  const berangkatDari = ["Makassar", "Jakarta", "Surabaya", "Banjarmasin", "Medan", "Kendari", "Kota Palu", "Singapura", "Kuala Lumpur"];
  const tujuanKe = ["Makkah", "Jeddah"]
  const paketHari = ["9 Hari", "12 Hari", "13 Hari", "15 Hari", "16 Hari", "30 Hari"];
  const maskapai = [
    { airline: "GARUDA", price: 15600000 },
    { airline: "SAUDIA", price: 14600000 },
    { airline: "QATAR", price: 14500000 },
    { airline: "ETIHAAD", price: 14500000 },
    { airline: "OMAN", price: 13500000 },
    { airline: "SCOOT", price: 13500000 },
    { airline: "INDIGO", price: 11900000 },
    { airline: "AIR ASIA KUL", price: 11500000 },
    { airline: "9 JUTA", price: 9000000 },
    { airline: "10 JUTA", price: 10000000 },
    { airline: "11 JUTA", price: 11000000 },
    { airline: "12 JUTA", price: 12000000 },
    { airline: "13 JUTA", price: 13000000 },
    { airline: "14 JUTA", price: 14000000 },
    { airline: "15 JUTA", price: 15000000 },
    { airline: "16 JUTA", price: 16000000 },
    { airline: "17 JUTA", price: 17000000 },
  ];


  return (
    <div className="w-full flex justify-center items-center flex-col space-y-4">
      <div className="w-full max-w-[600px]">
        <Label>Periode Bulan</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Periode Bulan" />
          </SelectTrigger>
          <SelectContent>
            {periodeRange.map((range, idx) => (
              <SelectItem key={idx} value={`${range.startDate} - ${range.endDate}`}>
                {range.startDate} - {range.endDate}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="w-full max-w-[600px] ">
        <Label className="mb-2 block">Tanggal Berangkat</Label>
        <Popover>
          <PopoverTrigger asChild className="w-full">
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !tanggalBerangkat && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {tanggalBerangkat ? format(tanggalBerangkat, "PPP") : <span>Pilih Tanggal</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={tanggalBerangkat}
              onSelect={setTanggalBerangkat}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="w-full max-w-[600px]  flex flex-row space-x-4">
        <div className="w-1/2">
          <Label>Berangkat Dari</Label>
          <Select>
            <SelectTrigger >
              <SelectValue placeholder="Pilih Kota" />
            </SelectTrigger>
            <SelectContent>
              {berangkatDari.map((kota, idx) => (
                <SelectItem key={idx} value={kota}>
                  {kota}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-1/2">
          <Label>Tujuan Ke</Label>
          <Select>
            <SelectTrigger >
              <SelectValue placeholder="Pilih Kota" />
            </SelectTrigger>
            <SelectContent>
              {tujuanKe.map((kota, idx) => (
                <SelectItem key={idx} value={kota}>
                  {kota}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="w-full max-w-[600px]">
        <Label>Paket Hari</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Paket Hari" />
          </SelectTrigger>
          <SelectContent>
            {paketHari.map((paket, idx) => (
              <SelectItem key={idx} value={paket}>
                {paket}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="w-full max-w-[600px] ">
        <Label className="mb-2 block">Tanggal Pulang</Label>
        <Popover>
          <PopoverTrigger asChild className="w-full">
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !tanggalPulang && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {tanggalPulang ? format(tanggalPulang, "PPP") : <span>Pilih Tanggal</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={tanggalPulang}
              onSelect={setTanggalPulang}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="w-full max-w-[600px]  flex flex-row space-x-4">
        <div className="w-1/2">
          <Label>Berangkat Dari</Label>
          <Select>
            <SelectTrigger >
              <SelectValue placeholder="Pilih Kota" />
            </SelectTrigger>
            <SelectContent>
              {tujuanKe.map((kota, idx) => (
                <SelectItem key={idx} value={kota}>
                  {kota}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-1/2">
          <Label>Tujuan Ke</Label>
          <Select>
            <SelectTrigger >
              <SelectValue placeholder="Pilih Kota" />
            </SelectTrigger>
            <SelectContent>
              {berangkatDari.map((kota, idx) => (
                <SelectItem key={idx} value={kota}>
                  {kota}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="w-full max-w-[600px]">
        <Label>Pilih Maskapai</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Pilih Maskapai" />
          </SelectTrigger>
          <SelectContent>
            {maskapai.map((e, idx) => (
              <SelectItem key={idx} value={e.airline}>
                {e.airline} - Rp {e.price}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="w-full max-w-[600px]">
        <Label>Jumlah Peserta</Label>
        <Input
          id="jumlahPeserta"
          name="jumlahPeserta"
          type="number"
        />
      </div>



    </div>
  );
}
