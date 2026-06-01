
import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { Baby, Clock, Milk, Moon, ShieldCheck, HeartHandshake, Smartphone, HelpCircle, CheckCircle2, Droplets, Printer, Bell, BarChart3, Apple, Sparkles, Building2, Code2, Coffee, ArrowLeft, Menu, X } from "lucide-react";
import "./index.css";

const colors = { primary: "rgb(159, 174, 142)", primaryDark: "rgb(159, 174, 142)", background:"#FAFAF8", cream:"#F7F3EC", sageLight:"#EEF1E8", border:"#E7E8E2", text:"#40443C", body:"#5A5E55", muted:"#94988E" };

function Button({children,className="",variant="default",style={},...props}) {
  return <button className={`inline-flex items-center justify-center gap-2 font-medium transition hover:opacity-90 active:scale-[0.99] ${variant==="outline" ? "border bg-transparent" : ""} ${className}`} style={style} {...props}>{children}</button>
}

function SectionHeader({eyebrow,title,text}) {
  return <div className="mx-auto mb-10 max-w-3xl text-center">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em]" style={{color:colors.primary}}>{eyebrow}</p>
    <h2 className="headline text-3xl font-semibold tracking-tight md:text-5xl" style={{color:colors.text}}>{title}</h2>
    {text && <p className="mt-5 text-lg leading-8" style={{color:colors.body}}>{text}</p>}
  </div>
}

function Card({children,className="",style={}}){ return <div className={className} style={style}>{children}</div> }
function CardContent({children,className=""}){ return <div className={className}>{children}</div> }

function PhoneMockup({src,alt,tilt=""}) {
  const tiltClass = tilt === "left" ? "lg:-rotate-3" : tilt === "right" ? "lg:rotate-3" : "";
  return <div className={`relative mx-auto w-full max-w-[300px] sm:max-w-[330px] ${tiltClass}`}>
    <div className="absolute -inset-8 rounded-[60px] blur-3xl" style={{backgroundColor:"rgba(159,174,142,0.24)"}} />
    <div className="relative rounded-[42px] bg-[#1C1D19] p-[7px] shadow-[0_30px_90px_rgba(39,42,37,0.22)] ring-1 ring-black/20 sm:rounded-[48px] sm:p-[8px]">
      <div className="absolute left-1/2 top-[13px] z-20 h-[24px] w-[96px] -translate-x-1/2 rounded-full bg-black sm:top-[14px] sm:h-[28px] sm:w-[112px]" />
      <div className="overflow-hidden rounded-[35px] bg-[#FFFDF8] sm:rounded-[40px]">
        <img src={src} alt={alt} className="block aspect-[9/19.5] w-full object-cover object-top" />
      </div>
    </div>
  </div>
}

const navItems = [
  ["Šta je","#sta-je"], ["Opcije","#opcije"], ["Kako se koristi","#kako-radi"], ["Dodaj na telefon","#dodaj-na-telefon"], ["Privatnost","#privatnost"], ["FAQ","#faq"]
];

const features = [
  [Clock, "Dnevnik aktivnosti", "Beležite hranjenje, spavanje, pelene i ostale aktivnosti kroz jednostavnu vremensku liniju."],
  [Bell, "Podsetnici", "Kreirajte podsetnike za vitamine, probiotike, terapije i druge važne rutine."],
  [BarChart3, "Pregled dana", "Brzo vidite sažetak aktivnosti, broj unosa i dnevne navike bebe."],
  [Baby, "Više beba", "Vodite evidenciju za jedno ili više dece u istoj aplikaciji."],
  [ShieldCheck, "Privatnost", "Bez registracije i bez reklama. Podaci ostaju na vašem uređaju."],
  [Smartphone, "Radi kao aplikacija", "Dodajte je na početni ekran telefona i koristite kao pravu mobilnu aplikaciju."]
];

const faqs = [
  ["Da li je Bebin dnevnik besplatan?", "Da. Prva verzija je zamišljena kao besplatna aplikacija za roditelje."],
  ["Da li moram da instaliram aplikaciju iz App Store-a?", "Ne. Aplikacija se otvara preko linka i može se dodati na početni ekran telefona."],
  ["Da li je namenjeno za novorođenčad?", "Da. Posebno je korisno u prvim danima i nedeljama kada roditelji žele da prate hranjenje, spavanje i rutinu."],
  ["Da li oba roditelja mogu da koriste dnevnik?", "To je jedna od opcija koju planiramo za buduće verzije."]
];

function Header({goSupport}) {
  const [open,setOpen]=React.useState(false);
  const close=()=>setOpen(false);
  return <header className="absolute left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-6">
    <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-white/55 px-4 py-3 shadow-sm backdrop-blur-xl md:px-6 lg:bg-white/30">
      <a href="#pocetna" onClick={close} className="flex items-center gap-3 font-semibold" style={{color:"#5F8A52"}}>
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl text-white shadow-sm md:h-11 md:w-11" style={{backgroundColor:colors.primaryDark}}><Baby size={22}/></span>
        <span className="text-lg md:text-2xl">Bebin dnevnik</span>
      </a>
      <nav className="hidden items-center gap-9 text-base font-medium lg:flex" style={{color:"#1F2E28"}}>
        {navItems.map(([label,href])=><a key={label} href={href} className="transition hover:opacity-70">{label}</a>)}
        <button onClick={goSupport} className="transition hover:opacity-70">Podrži projekat</button>
      </nav>
      <div className="flex items-center gap-2">
        <a href="https://timov-dnevnik.vercel.app/" target="_blank" rel="noopener noreferrer" className="hidden md:block"><Button className="h-12 rounded-full px-7 text-base text-white shadow-sm" style={{backgroundColor:colors.primaryDark}}>Otvori aplikaciju</Button></a>
        <button type="button" onClick={()=>setOpen(!open)} className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm lg:hidden" aria-label="Otvori meni">{open ? <X size={22}/> : <Menu size={22}/>}</button>
      </div>
    </div>
    {open && <div className="mx-auto mt-3 max-w-7xl rounded-[28px] border bg-white/95 p-4 shadow-xl backdrop-blur-xl lg:hidden" style={{borderColor:colors.border}}>
      <div className="grid gap-2">
        {navItems.map(([label,href])=><a key={label} href={href} onClick={close} className="rounded-2xl px-4 py-3 font-medium" style={{color:colors.text}}>{label}</a>)}
        <button onClick={()=>{close();goSupport();}} className="rounded-2xl px-4 py-3 text-left font-medium" style={{color:colors.text}}>Podrži projekat</button>
        <a href="https://timov-dnevnik.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={close} className="mt-2 inline-flex h-12 items-center justify-center rounded-full text-white" style={{backgroundColor:colors.primaryDark}}>Otvori aplikaciju</a>
      </div>
    </div>}
  </header>
}

function SupportProjectPage({goHome}) {
  return <div className="min-h-screen" style={{backgroundColor:colors.background,color:colors.text}}>
    <header className="px-4 pt-6 md:px-8"><div className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-white/70 px-4 py-3 shadow-sm backdrop-blur-xl md:px-6">
      <button onClick={goHome} className="flex items-center gap-3 font-semibold" style={{color:colors.primaryDark}}><span className="flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-sm" style={{backgroundColor:colors.primaryDark}}><Baby size={23}/></span><span className="text-xl md:text-2xl">Bebin dnevnik</span></button>
      <button onClick={goHome} className="hidden items-center gap-2 rounded-full border bg-white px-5 py-3 text-sm font-medium md:flex" style={{borderColor:colors.border,color:colors.body}}><ArrowLeft size={16}/>Nazad na početnu</button>
    </div></header>
    <main>
      <section className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-0" style={{background:"radial-gradient(circle at 18% 20%, rgba(159,174,142,0.22) 0%, transparent 32%), radial-gradient(circle at 82% 12%, rgba(232,222,208,0.65) 0%, transparent 36%)"}} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-white/80 px-4 py-2 text-sm shadow-sm backdrop-blur" style={{borderColor:colors.border,color:colors.body}}><HeartHandshake size={16} style={{color:colors.primaryDark}}/>Dobrovoljna podrška projektu</div>
            <h1 className="headline max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.04em] md:text-7xl" style={{color:"#153A2C"}}>Pomozite da Bebin dnevnik ostane koristan roditeljima.</h1>
            <p className="mt-7 max-w-2xl text-xl leading-9" style={{color:colors.body}}>Bebin dnevnik je nastao iz stvarne potrebe tokom prvih dana sa bebom. Podrška pomaže da aplikacija ostane jednostavna, stabilna i dostupna bez agresivnih reklama.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button className="h-14 rounded-full px-8 text-base text-white shadow-[0_16px_36px_rgba(159,174,142,0.34)]" style={{backgroundColor:colors.primaryDark}}><HeartHandshake size={19}/>Podrži projekat</Button><a href="https://timov-dnevnik.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex h-14 items-center justify-center rounded-full border bg-white/70 px-8 text-base font-medium backdrop-blur" style={{borderColor:colors.primary,color:"#173B2F"}}>Otvori aplikaciju</a></div>
          </motion.div>
          <motion.div initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.1}}>
            <div className="rounded-[40px] border bg-white/80 p-6 shadow-[0_30px_90px_rgba(64,68,60,0.10)] backdrop-blur" style={{borderColor:colors.border}}><div className="rounded-[32px] p-6" style={{backgroundColor:colors.sageLight}}><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white" style={{color:colors.primaryDark}}><Sparkles size={28}/></div><h2 className="headline text-3xl font-semibold leading-tight" style={{color:colors.text}}>Šta podrška omogućava?</h2><div className="mt-6 grid gap-4">{["Aplikacija može da ostane bez agresivnih reklama.","Mogu da se razvijaju opcije koje roditeljima zaista trebaju.","U budućnosti, deo podrške može biti usmeren ka ustanovama za bebe i roditelje."].map(item=><div key={item} className="flex gap-3 rounded-2xl bg-white p-4"><CheckCircle2 className="mt-1 shrink-0" size={20} style={{color:colors.primaryDark}}/><p className="leading-7" style={{color:colors.body}}>{item}</p></div>)}</div></div></div>
          </motion.div>
        </div>
      </section>
      <section className="px-5 py-20 md:px-8" style={{backgroundColor:colors.sageLight}}><div className="mx-auto max-w-7xl"><SectionHeader eyebrow="Kako podrška pomaže" title="Tri stvari koje podržavate." text="Podrška nije obavezna. Ona postoji za one kojima je aplikacija pomogla i koji žele da pomognu da projekat nastavi da se razvija."/><div className="grid gap-5 md:grid-cols-3">{[[Code2,"Razvoj aplikacije","Nove opcije, bolji UX, stabilnost i redovno održavanje."],[ShieldCheck,"Mirno iskustvo bez reklama","Aplikacija treba da ostane jednostavna i nenametljiva."],[Building2,"Buduće donacije","Plan je da deo podrške kasnije može da ide ustanovama koje pomažu bebama i roditeljima."]].map(([Icon,title,text])=><Card key={title} className="rounded-[30px] border bg-white shadow-sm" style={{borderColor:colors.border}}><CardContent className="p-7"><div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl" style={{backgroundColor:colors.cream,color:colors.primaryDark}}><Icon size={25}/></div><h3 className="headline text-2xl font-semibold leading-tight" style={{color:colors.text}}>{title}</h3><p className="mt-4 leading-7" style={{color:colors.body}}>{text}</p></CardContent></Card>)}</div></div></section>
      <section className="px-5 py-20 md:px-8"><div className="mx-auto max-w-5xl rounded-[40px] border bg-white p-8 text-center shadow-[0_24px_80px_rgba(64,68,60,0.08)] md:p-14" style={{borderColor:colors.border}}><div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl" style={{backgroundColor:colors.sageLight,color:colors.primaryDark}}><Coffee size={30}/></div><h2 className="headline text-4xl font-semibold leading-tight md:text-5xl" style={{color:colors.text}}>Podrška je potpuno dobrovoljna.</h2><p className="mx-auto mt-5 max-w-3xl text-lg leading-8" style={{color:colors.body}}>Osnovne funkcije ne treba da budu zaključane roditeljima kojima su potrebne. Ova stranica postoji za one koji žele da podrže dalji razvoj projekta.</p><Button className="mt-8 h-14 rounded-full px-9 text-base text-white" style={{backgroundColor:colors.primaryDark}}>Podrži projekat</Button></div></section>
    </main>
  </div>
}

function LandingPage({goSupport}) {
  return <div className="min-h-screen scroll-smooth" style={{backgroundColor:colors.background,color:colors.text}}>
    <Header goSupport={goSupport}/>
    <main>
      <section id="pocetna" className="relative min-h-screen overflow-hidden px-4 pb-8 pt-24 md:px-8 md:pb-20 md:pt-32">
        <div className="absolute inset-0 hidden bg-cover bg-center md:block" style={{backgroundImage:"linear-gradient(90deg, rgba(250,250,248,0.12) 0%, rgba(250,250,248,0.52) 34%, rgba(250,250,248,0.74) 52%, rgba(250,250,248,0.24) 100%), url('/background.png')",backgroundPosition:"12% center"}}/>
        <div className="absolute inset-0 bg-cover bg-center md:hidden" style={{backgroundImage:"linear-gradient(180deg, rgba(250,250,248,0.62) 0%, rgba(250,250,248,0.74) 42%, rgba(250,250,248,0.94) 78%, rgba(250,250,248,1) 100%), url('/background-mobile.png')",backgroundPosition:"center top"}}/>
        <div className="absolute inset-0 hidden md:block" style={{background:"linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(247,243,236,0.62) 100%)"}}/>
        <div className="relative mx-auto grid min-h-[640px] max-w-7xl items-center gap-8 md:min-h-[760px] lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="mx-auto max-w-2xl pt-[6vh] text-center sm:pt-[8vh] md:pt-0 lg:ml-[24%] lg:text-left">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full bg-white/50 px-4 py-2 text-sm backdrop-blur md:mb-7 md:bg-transparent md:px-0 md:py-0 md:text-base" style={{color:"#1F332B"}}><span>Jednostavno. Brzo. Za vaše najvažnije trenutke.</span><span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/70 shadow-sm" style={{color:colors.primaryDark}}><HeartHandshake size={17}/></span></div>
            <h1 className="headline text-5xl font-bold leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-8xl" style={{color:"#153A2C"}}>Bebin dnevnik</h1>
            <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 tracking-[-0.02em] md:mt-7 md:text-2xl md:leading-10" style={{color:"#173B2F"}}>Dnevnik aktivnosti i pametni podsetnici za prve dane sa bebom.</p>
            <p className="mt-5 max-w-2xl text-base leading-7 md:mt-6 md:text-lg md:leading-8" style={{color:"#3F5049"}}>Sve što vam treba u prvim danima — pregledno, brzo i bez stresa. Napravljen od roditelja, za roditelje.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"><a href="https://timov-dnevnik.vercel.app/" target="_blank" rel="noopener noreferrer"><Button className="h-14 w-full min-w-[240px] whitespace-nowrap rounded-full px-8 text-base text-white shadow-[0_16px_36px_rgba(159,174,142,0.34)] sm:w-auto md:h-16 md:px-9 md:text-lg" style={{backgroundColor:colors.primaryDark}}><HeartHandshake size={21}/>Otvori aplikaciju</Button></a><a href="#kako-radi"><Button variant="outline" className="h-14 w-full min-w-[240px] whitespace-nowrap rounded-full bg-white/55 px-8 text-base backdrop-blur-md sm:w-auto md:h-16 md:px-9 md:text-lg" style={{borderColor:colors.primaryDark,color:"#173B2F"}}><CheckCircle2 size={21}/>Pogledaj kako radi</Button></a></div>
            <div className="mt-7 flex items-center justify-center gap-2 text-sm lg:justify-start" style={{color:"#53635C"}}><ShieldCheck size={16}/><span>Bez registracije • Bez reklama • Vaši podaci ostaju vaši</span></div>
          </motion.div>
          <motion.div initial={{opacity:0,y:28,rotate:1}} animate={{opacity:1,y:-12,rotate:0}} transition={{duration:.7,delay:.1}} className="relative mx-auto hidden w-full max-w-[520px] lg:block lg:translate-x-[90px] lg:-translate-y-[8px]"><div className="absolute -inset-20 rounded-[140px] blur-3xl" style={{backgroundColor:"rgba(159,174,142,0.46)"}}/><img src="/appimage.png" alt="iPhone 17 Pro mockup sa aplikacijom Bebin dnevnik" className="relative z-10 w-full object-contain drop-shadow-[0_54px_90px_rgba(39,42,37,0.36)]"/></motion.div>
        </div>
        <div className="relative mx-auto mt-6 grid max-w-6xl gap-4 rounded-[32px] border bg-white/82 p-4 shadow-[0_24px_80px_rgba(64,68,60,0.10)] backdrop-blur-xl sm:grid-cols-2 md:-mt-10 md:grid-cols-4 md:rounded-[36px] md:p-7" style={{borderColor:"rgba(231,232,226,0.8)"}}>{[[Clock,"Brzo i jednostavno","Unesite aktivnosti za samo nekoliko sekundi."],[ShieldCheck,"Privatno i sigurno","Bez reklama i praćenja. Vaši podaci su vaši."],[Smartphone,"Dodajte na telefon","Radi kao aplikacija, bez instalacije iz prodavnice."],[HeartHandshake,"Napravljeno s ljubavlju","Za mirnije dane i zadovoljnije roditelje."]].map(([Icon,title,text])=><div key={title} className="rounded-3xl p-4 text-center"><div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full" style={{backgroundColor:"#DCE6D3",color:"#4F7745"}}><Icon size={24}/></div><h3 className="font-semibold" style={{color:"#1F2E28"}}>{title}</h3><p className="mx-auto mt-2 max-w-[190px] text-sm leading-6" style={{color:"#53635C"}}>{text}</p></div>)}</div>
      </section>

      <section id="sta-je" className="px-5 py-20 md:px-8"><div className="mx-auto max-w-4xl text-center"><SectionHeader eyebrow="Šta je Bebin dnevnik" title="Mala pomoć za velike prve dane." text="Bebin dnevnik je jednostavna web aplikacija za roditelje koji žele da prate osnovne aktivnosti bebe bez papira, tabela i komplikovanih aplikacija."/></div></section>
      <section id="opcije" className="px-5 py-20 md:px-8" style={{backgroundColor:colors.sageLight}}><div className="mx-auto max-w-7xl"><SectionHeader eyebrow="Opcije" title="Dnevnik, podsetnici i pregled dana." text="Aplikacija sada pokriva unos aktivnosti, planirane podsetnike i brz pregled dana."/><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{features.map(([Icon,title,text])=><Card key={title} className="rounded-[28px] border bg-white shadow-sm" style={{borderColor:colors.border}}><CardContent className="p-7"><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl" style={{backgroundColor:colors.cream,color:colors.primary}}><Icon size={24}/></div><h3 className="text-xl font-semibold" style={{color:colors.text}}>{title}</h3><p className="mt-3 leading-7" style={{color:colors.body}}>{text}</p></CardContent></Card>)}</div></div></section>
      <section id="kako-radi" className="overflow-hidden px-5 py-24 md:px-8" style={{backgroundColor:"#FFFDF8"}}><div className="mx-auto max-w-7xl"><SectionHeader eyebrow="Kako radi" title="Od unosa do podsetnika." text="Tri taba pomažu da brzo unesete aktivnosti, pratite podsetnike i proverite pregled dana."/><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">{[{n:"01",t:"Dodajte bebu",d:"Unesite ime bebe i datum rođenja. Možete odmah da krenete ili da probate demo dnevnik.",img:"/step-welcome.png",tilt:"left"},{n:"02",t:"Vodite dnevnik",d:"Beležite hranjenje, spavanje, pelene i ostale aktivnosti tokom dana.",img:"/step-dnevnik.png"},{n:"03",t:"Kreirajte podsetnike",d:"Postavite podsetnike za vitamine, probiotike, terapije ili druge važne rutine.",img:"/step-podsetnik.png"},{n:"04",t:"Pratite pregled dana",d:"Pregledajte statistiku i sažetak svih aktivnosti na jednom mestu.",img:"/step-pregled.png",tilt:"right"}].map(step=><motion.div key={step.n} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:.55}} className="relative rounded-[36px] border bg-white p-5 shadow-[0_20px_70px_rgba(64,68,60,0.07)]" style={{borderColor:colors.border}}><div className="mb-5"><span className="rounded-full px-4 py-2 text-sm font-semibold" style={{backgroundColor:"#E7EFE0",color:"#5F8A52"}}>Korak {step.n}</span></div><PhoneMockup src={step.img} alt={step.t} tilt={step.tilt}/><div className="pt-7"><h3 className="headline text-2xl font-semibold leading-tight" style={{color:colors.text}}>{step.t}</h3><p className="mt-3 leading-7" style={{color:colors.body}}>{step.d}</p></div></motion.div>)}</div></div></section>
      <section id="dodaj-na-telefon" className="px-5 py-20 md:px-8" style={{backgroundColor:colors.cream}}><div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em]" style={{color:colors.primary}}>Dodaj na telefon</p><h2 className="headline text-3xl font-semibold md:text-5xl" style={{color:colors.text}}>Koristite Bebin dnevnik kao aplikaciju.</h2><p className="mt-5 text-lg leading-8" style={{color:colors.body}}>Bebin dnevnik se može dodati na početni ekran telefona. Posle toga ga otvarate kao svaku drugu aplikaciju.</p></div><div className="grid gap-4"><Card className="rounded-[28px] border bg-white" style={{borderColor:colors.border}}><CardContent className="p-7"><div className="flex items-center gap-[6px]"><Apple size={18} strokeWidth={2.2} style={{color:colors.text}}/><h3 className="text-xl font-semibold leading-none" style={{color:colors.text}}>iPhone</h3></div><p className="mt-3 leading-7" style={{color:colors.body}}>Otvorite link u Safari browseru, kliknite Share i izaberite Add to Home Screen.</p></CardContent></Card><Card className="rounded-[28px] border bg-white" style={{borderColor:colors.border}}><CardContent className="p-7"><div className="flex items-center gap-[6px]"><span className="text-[20px] leading-none" style={{color:colors.primaryDark}}>🤖</span><h3 className="text-xl font-semibold leading-none" style={{color:colors.text}}>Android</h3></div><p className="mt-3 leading-7" style={{color:colors.body}}>Otvorite link u Chrome browseru i izaberite Install App ili Add to Home Screen.</p></CardContent></Card></div></div></section>
      <section id="privatnost" className="px-5 py-20 md:px-8"><div className="mx-auto max-w-5xl rounded-[36px] border bg-white p-8 md:p-12" style={{borderColor:colors.border}}><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl" style={{backgroundColor:colors.sageLight,color:colors.primary}}><ShieldCheck size={28}/></div><h2 className="headline text-3xl font-semibold md:text-5xl" style={{color:colors.text}}>Vaši podaci treba da ostanu vaši.</h2><p className="mt-5 text-lg leading-8" style={{color:colors.body}}>Bebin dnevnik je zamišljen kao mirna i jednostavna aplikacija, bez reklama, nepotrebnog praćenja i agresivnih notifikacija.</p></div></section>
      <section id="podrzi" className="px-5 py-20 md:px-8" style={{backgroundColor:colors.sageLight}}><div className="mx-auto max-w-5xl text-center"><div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white" style={{color:colors.primary}}><HeartHandshake size={28}/></div><h2 className="headline text-3xl font-semibold md:text-5xl" style={{color:colors.text}}>Ako vam aplikacija pomogne, podržite projekat.</h2><p className="mx-auto mt-5 max-w-3xl text-lg leading-8" style={{color:colors.body}}>Ideja je da Bebin dnevnik ostane koristan i dostupan roditeljima. U budućnosti podrška može ići ka daljem razvoju aplikacije ili donacijama ustanovama koje pomažu bebama i roditeljima.</p><Button onClick={goSupport} className="mt-8 h-12 rounded-full px-7 text-base text-white" style={{backgroundColor:colors.primary}}>Podrži projekat</Button></div></section>
      <section id="faq" className="px-5 py-20 md:px-8"><div className="mx-auto max-w-4xl"><SectionHeader eyebrow="FAQ" title="Česta pitanja."/><div className="grid gap-4">{faqs.map(([q,a])=><Card key={q} className="rounded-[24px] border bg-white" style={{borderColor:colors.border}}><CardContent className="p-6"><div className="flex gap-4"><HelpCircle className="mt-1 shrink-0" size={20} style={{color:colors.primary}}/><div><h3 className="font-semibold" style={{color:colors.text}}>{q}</h3><p className="mt-2 leading-7" style={{color:colors.body}}>{a}</p></div></div></CardContent></Card>)}</div></div></section>
      <section id="otvori-aplikaciju" className="px-5 pb-20 md:px-8"><div className="mx-auto max-w-5xl rounded-[40px] p-10 text-center md:p-16" style={{background:`linear-gradient(180deg, ${colors.cream} 0%, ${colors.sageLight} 100%)`}}><h2 className="headline text-3xl font-semibold md:text-5xl" style={{color:colors.text}}>Spremni da probate Bebin dnevnik?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8" style={{color:colors.body}}>Otvorite aplikaciju, dodajte je na telefon i počnite da pratite dan vaše bebe na jednostavan način.</p><a href="https://timov-dnevnik.vercel.app/" target="_blank" rel="noopener noreferrer"><Button className="mt-8 h-12 rounded-full px-8 text-base text-white" style={{backgroundColor:colors.primary}}>Otvori aplikaciju</Button></a></div></section>
    </main>
    <footer className="border-t px-5 py-8 md:px-8" style={{borderColor:colors.border}}><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm md:flex-row" style={{color:colors.muted}}><p>© 2026 Bebin dnevnik</p><div className="flex gap-5"><a href="#privatnost">Privatnost</a><button onClick={goSupport}>Podrži projekat</button><a href="mailto:kontakt@bebindnevnik.rs">Kontakt</a></div></div></footer>
  </div>
}

function App() {
  const [view,setView]=React.useState("landing");
  const goSupport=()=>{setView("support"); window.scrollTo({top:0,behavior:"smooth"});}
  const goHome=()=>{setView("landing"); setTimeout(()=>document.getElementById("pocetna")?.scrollIntoView({behavior:"smooth"}),0);}
  return view==="support" ? <SupportProjectPage goHome={goHome}/> : <LandingPage goSupport={goSupport}/>;
}

createRoot(document.getElementById("root")).render(<App/>);
