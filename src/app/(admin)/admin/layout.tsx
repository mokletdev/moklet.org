

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="mx-auto w-full max-w-[1192px] px-5 py-[22px]">
        {children}
      </main>
    </>
  );
}