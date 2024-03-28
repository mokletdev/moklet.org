"use client"
import { H4, P } from "@/app/_components/global/Text"
import { useState } from "react"
import Modal from "./components/Modal"

interface AdminInterface {
  name: string
  email: string
  nickname: string
  gender: string
  country: string
  language: string
  timeZone: string
}

const dummyData: AdminInterface = {
  name: "admin jualan kurma",
  email: "admin@gmail.com",
  nickname: "admin",
  gender: "non binary",
  country: "Zimbabwe",
  language: "african british",
  timeZone: "Jakarta, Daerah Khusus Ibukota Jakarta (GMT+7) Kamis, 28 Maret 2024, 11.13"
}

export default function Admin() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <header className="flex justify-between items-center">
        <div className="flex gap-6">
          <div className="w-16 h-16 rounded-full bg-gray-300"></div>
          <div className="">
            <H4>{dummyData.name}</H4>
            <P>{dummyData.email}</P>
          </div>
        </div>
        <button onClick={openModal} className="px-6 py-2 w-24 h-12 rounded-lg bg-green-400 hover:bg-green-500 text-white">Edit</button>
      </header>
      <article className="my-6 flex flex-wrap gap-12">
        <div className="w-1/3">
          <P>Nama Lengkap</P>
          <span className="text-lg font-medium">{dummyData.name}</span>
        </div>
        <div className="w-1/3">
          <P>Nama Tampilan</P>
          <span className="text-lg font-medium">{dummyData.nickname}</span>
        </div>
        <div className="w-1/3">
          <P>Jenis Kelamin</P>
          <span className="text-lg font-medium">{dummyData.gender}</span>
        </div>
        <div className="w-1/3">
          <P>Negara/ Wilayah</P>
          <span className="text-lg font-medium">{dummyData.country}</span>
        </div>
        <div className="w-1/3">
          <P>Bahasa</P>
          <span className="text-lg font-medium">{dummyData.language}</span>
        </div>
        <div className="w-1/3">
          <P>Zona Waktu</P>
          <span className="text-lg font-medium">{dummyData.timeZone}</span>
        </div>
      </article>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
