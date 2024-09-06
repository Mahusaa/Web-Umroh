
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
import { visaItems, transportasiItems, mutawifItems, mesirItems } from "~/data/mkm";

type Item = {
  name: string;
  amount: number;
};

export function Form3() {
  const [selectedHandlingSaudi, setSelectedHandlingSaudi] = useState<number>(0);
  const [selectedPerlengkapan, setSelectedPerlengkapan] = useState<number>(0);
  const [selectedManasik, setSelectedManasik] = useState<number>(0);
  const [selectedHandlingDomestik, setSelectedHandlingDomestik] = useState<number>(0);
  const [selectedVisa, setSelectedVisa] = useState<number>(0);
  const [selectedTransportasi, setSelectedTransportasi] = useState<number>(0);
  const [selectedMutawif, setSelectedMutawif] = useState<number>(0);
  const [selectedMesir, setSelectedMesir] = useState<number>(0);


  const formatRupiah = (number: number): string =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);

  const handleSelectChange = (
    value: string,
    items: Item[],
    setSelected: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const selectedItem = items.find((item) => item.name === value);
    if (selectedItem) {
      setSelected(selectedItem.amount);
    }
  };

  const handlingSaudi: Item[] = [
    { name: "TIDAK", amount: 0 },
    { name: "ONLY 4-7", amount: 3837600 },
    { name: "ONLY 8-11", amount: 2074800 },
    { name: "ONLY 12-15", amount: 1482000 },
    { name: "ONLY 16-19", amount: 1185600 },
    { name: "ONLY 20-23", amount: 1014000 },
    { name: "ONLY 24-27", amount: 936000 },
    { name: "ONLY 30", amount: 858000 },
    { name: "FULL 4-7", amount: 5928000 },
    { name: "FULL 8-11", amount: 3120000 },
    { name: "FULL 12-15", amount: 2184000 },
    { name: "FULL 16-19", amount: 1716000 },
    { name: "FULL 20-23", amount: 1435200 },
    { name: "FULL 24-27", amount: 1248000 },
    { name: "FULL 30", amount: 1092000 },
    { name: "BANDARA & DAR", amount: 1548000 },
    { name: "SNACK", amount: 129000 },
    { name: "TIP", amount: 1720000 },
    { name: "TIP & SNACK PRIVATE", amount: 1849000 },
  ];
  const handlingDomestik: Item[] = [
    {
      name: "TIDAK",
      amount: 0
    },
    {
      name: "NASI BOX & BAGASI",
      amount: 250000
    },
    {
      name: "ZUKAVIA & BAGASI",
      amount: 350000
    },
    {
      name: "BAGASI ONLY",
      amount: 150000
    }
  ];


  const perlengkapan: Item[] = [
    { name: "TIDAK", amount: 0 },
    { name: "AKSESORIS", amount: 350000 },
    { name: "FULL PAKET KOPER", amount: 1000000 },
  ];


  const manasik: Item[] = [
    { name: "TIDAK", amount: 0 },
    { name: "MANASIK ONLINE", amount: 150000 },
    { name: "MANASIK HOTEL", amount: 250000 },
  ];


  return (
    <div className="w-full flex justify-center items-center flex-col space-y-4">
      {/* Handling Saudi */}
      <div className="w-full max-w-[600px] space-y-2">
        <Label>Handling Saudi</Label>
        <Select
          onValueChange={(value) =>
            handleSelectChange(value, handlingSaudi, setSelectedHandlingSaudi)
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Pilih Handling Saudi" />
          </SelectTrigger>
          <SelectContent>
            {handlingSaudi.map((e, idx) => (
              <SelectItem key={idx} value={e.name}>
                {e.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input value={formatRupiah(selectedHandlingSaudi)} readOnly />
      </div>

      {/* Perlengkapan */}
      <div className="w-full max-w-[600px] space-y-2">
        <Label>Perlengkapan</Label>
        <Select
          onValueChange={(value) =>
            handleSelectChange(value, perlengkapan, setSelectedPerlengkapan)
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Pilih Perlengkapan" />
          </SelectTrigger>
          <SelectContent>
            {perlengkapan.map((e, idx) => (
              <SelectItem key={idx} value={e.name}>
                {e.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input value={formatRupiah(selectedPerlengkapan)} readOnly />
      </div>


      {/* Manasik */}
      <div className="w-full max-w-[600px] space-y-2">
        <Label>Handling Domestik</Label>
        <Select
          onValueChange={(value) =>
            handleSelectChange(value, manasik, setSelectedManasik)
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Pilih Jasa manasik" />
          </SelectTrigger>
          <SelectContent>
            {manasik.map((e, idx) => (
              <SelectItem key={idx} value={e.name}>
                {e.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input value={formatRupiah(selectedManasik)} readOnly />
      </div>


      {/*Handling Domestik */}
      <div className="w-full max-w-[600px] space-y-2">
        <Label>Pilih Manasik</Label>
        <Select
          onValueChange={(value) =>
            handleSelectChange(value, handlingDomestik, setSelectedHandlingDomestik)
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Pilih Jasa Handling Domestik" />
          </SelectTrigger>
          <SelectContent>
            {handlingDomestik.map((e, idx) => (
              <SelectItem key={idx} value={e.name}>
                {e.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input value={formatRupiah(selectedHandlingDomestik)} readOnly />
      </div>

      {/*Visa Umroh*/}
      <div className="w-full max-w-[600px] space-y-2">
        <Label>Visa Umroh</Label>
        <Select
          onValueChange={(value) =>
            handleSelectChange(value, visaItems, setSelectedVisa)
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Pilih Jenis Visa" />
          </SelectTrigger>
          <SelectContent>
            {visaItems.map((e, idx) => (
              <SelectItem key={idx} value={e.name}>
                {e.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input value={formatRupiah(selectedVisa)} readOnly />
      </div>


      {/*Transportasi*/}
      <div className="w-full max-w-[600px] space-y-2">
        <Label>Transportasi</Label>
        <Select
          onValueChange={(value) =>
            handleSelectChange(value, transportasiItems, setSelectedTransportasi)
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Pilih Jenis Transportasi" />
          </SelectTrigger>
          <SelectContent>
            {transportasiItems.map((e, idx) => (
              <SelectItem key={idx} value={e.name}>
                {e.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input value={formatRupiah(selectedTransportasi)} readOnly />
      </div>



      {/*Mutawwif*/}
      <div className="w-full max-w-[600px] space-y-2">
        <Label>Mutawif</Label>
        <Select
          onValueChange={(value) =>
            handleSelectChange(value, mutawifItems, setSelectedMutawif)
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Pilih Jasa Mutawif" />
          </SelectTrigger>
          <SelectContent>
            {mutawifItems.map((e, idx) => (
              <SelectItem key={idx} value={e.name}>
                {e.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input value={formatRupiah(selectedMutawif)} readOnly />
      </div>

      {/*Plus Mesir*/}
      <div className="w-full max-w-[600px] space-y-2">
        <Label>Plus Mesir</Label>
        <Select
          onValueChange={(value) =>
            handleSelectChange(value, mesirItems, setSelectedMesir)
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Pilih Plus Mesir" />
          </SelectTrigger>
          <SelectContent>
            {mesirItems.map((e, idx) => (
              <SelectItem key={idx} value={e.name}>
                {e.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input value={formatRupiah(selectedMesir)} readOnly />
      </div>






    </div>
  );
}
