import React, { useState, useEffect, useRef } from 'react';
import {
  Settings, Users, MessageSquare, DollarSign, HelpCircle,
  Package, Layers, Trash2, Plus, Edit2, Save, Sparkles,
  LogOut, ExternalLink, Check, Upload, Star, BookOpen,
  Target, Video, Building2, ArrowLeft, X, Cpu
} from 'lucide-react';
import { useContent, EventDetails, HeroContent, AiTool, TrustedBrand, PainPoint, ProgramPillar } from '../data/ContentContext';
import { Speaker, Testimonial, Deliverable, PricingPackage, FaqItem } from '../types';

interface AdminDashboardProps {
  onLogout: () => void;
  onBackToSite: () => void;
}

type TabId =
  | 'hero'
  | 'event'
  | 'videos'
  | 'pain_points'
  | 'program'
  | 'deliverables'
  | 'speakers'
  | 'testimonials'
  | 'pricing'
  | 'faqs'
  | 'brands'
  | 'ai_tools';

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout, onBackToSite }) => {
  const {
    content,
    updateEventDetails,
    updateHeroContent,
    updateVideoLink,
    setTrustedBrands,
    setAiTools,
    setPainPoints,
    setProgramPillars,
    setDeliverables,
    setSpeakers,
    setTestimonials,
    setPricingPackages,
    setFaqItems,
  } = useContent();

  const [activeTab, setActiveTab] = useState<TabId>('hero');
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  // ─── HERO CONTENT ────────────────────────────────────────────────────────────
  const [heroForm, setHeroForm] = useState({ ...content.heroContent });
  const [heroBulletsText, setHeroBulletsText] = useState((content.heroContent.bulletPoints || []).join('\n'));

  useEffect(() => {
    setHeroForm({ ...content.heroContent });
    setHeroBulletsText((content.heroContent.bulletPoints || []).join('\n'));
  }, [content.heroContent]);

  const handleSaveHero = (e: React.FormEvent) => {
    e.preventDefault();
    updateHeroContent({
      ...heroForm,
      bulletPoints: heroBulletsText.split('\n').map(s => s.trim()).filter(Boolean),
    });
    showToast('Hero section berhasil disimpan!');
  };

  // ─── EVENT DETAILS ──────────────────────────────────────────────────────────
  const [eventForm, setEventForm] = useState({ ...content.eventDetails });
  useEffect(() => setEventForm({ ...content.eventDetails }), [content.eventDetails]);

  const handleSaveEvent = (e: React.FormEvent) => {
    e.preventDefault();
    updateEventDetails(eventForm);
    showToast('Detail event berhasil disimpan!');
  };

  // ─── VIDEOS ─────────────────────────────────────────────────────────────────
  const [videoForms, setVideoForms] = useState({
    hero: { url: content.videoLinks.hero.url, title: content.videoLinks.hero.title, description: content.videoLinks.hero.description, thumbnailSrc: content.videoLinks.hero.thumbnailSrc || '' },
    testimoni: { url: content.videoLinks.testimoni.url, title: content.videoLinks.testimoni.title, description: content.videoLinks.testimoni.description, thumbnailSrc: content.videoLinks.testimoni.thumbnailSrc || '' },
    portfolioBatch1: { url: content.videoLinks.portfolioBatch1.url, title: content.videoLinks.portfolioBatch1.title, description: content.videoLinks.portfolioBatch1.description, thumbnailSrc: content.videoLinks.portfolioBatch1.thumbnailSrc || '' },
    portfolioBatch2: { url: content.videoLinks.portfolioBatch2.url, title: content.videoLinks.portfolioBatch2.title, description: content.videoLinks.portfolioBatch2.description, thumbnailSrc: content.videoLinks.portfolioBatch2.thumbnailSrc || '' },
  });

  useEffect(() => {
    setVideoForms({
      hero: { url: content.videoLinks.hero.url, title: content.videoLinks.hero.title, description: content.videoLinks.hero.description, thumbnailSrc: content.videoLinks.hero.thumbnailSrc || '' },
      testimoni: { url: content.videoLinks.testimoni.url, title: content.videoLinks.testimoni.title, description: content.videoLinks.testimoni.description, thumbnailSrc: content.videoLinks.testimoni.thumbnailSrc || '' },
      portfolioBatch1: { url: content.videoLinks.portfolioBatch1.url, title: content.videoLinks.portfolioBatch1.title, description: content.videoLinks.portfolioBatch1.description, thumbnailSrc: content.videoLinks.portfolioBatch1.thumbnailSrc || '' },
      portfolioBatch2: { url: content.videoLinks.portfolioBatch2.url, title: content.videoLinks.portfolioBatch2.title, description: content.videoLinks.portfolioBatch2.description, thumbnailSrc: content.videoLinks.portfolioBatch2.thumbnailSrc || '' },
    });
  }, [content.videoLinks]);

  const handleVideoThumbnailUpload = (key: keyof typeof videoForms, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setVideoForms(prev => ({
        ...prev,
        [key]: { ...prev[key], thumbnailSrc: reader.result as string }
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSaveVideo = (e: React.FormEvent, key: keyof typeof videoForms) => {
    e.preventDefault();
    updateVideoLink(key, videoForms[key]);
    showToast('Video info & thumbnail berhasil disimpan!');
  };

  // ─── PAIN POINTS ────────────────────────────────────────────────────────────
  const painFormRef = useRef<HTMLFormElement>(null);
  const [editingPainIdx, setEditingPainIdx] = useState<number | null>(null);
  const [painInput, setPainInput] = useState<PainPoint>({ icon: '', title: '', description: '' });

  const handleSavePain = (e: React.FormEvent) => {
    e.preventDefault();
    if (!painInput.title.trim()) return;
    const list = [...content.painPoints];
    if (editingPainIdx !== null) list[editingPainIdx] = painInput;
    else list.push(painInput);
    setPainPoints(list);
    setEditingPainIdx(null);
    setPainInput({ icon: '', title: '', description: '' });
    showToast('Pain point berhasil disimpan!');
  };

  // ─── DELIVERABLES ───────────────────────────────────────────────────────────
  const delivFormRef = useRef<HTMLFormElement>(null);
  const [editingDelivIdx, setEditingDelivIdx] = useState<number | null>(null);
  const [delivInput, setDelivInput] = useState<Deliverable>({
    id: '', title: '', description: '', category: 'ai', sampleContent: '', iconName: 'FileText'
  });

  const handleSaveDeliv = (e: React.FormEvent) => {
    e.preventDefault();
    if (!delivInput.title.trim()) return;
    const list = [...content.deliverables];
    const item = { ...delivInput, id: delivInput.id || `deliv-${Date.now()}` };
    if (editingDelivIdx !== null) list[editingDelivIdx] = item;
    else list.push(item);
    setDeliverables(list);
    setEditingDelivIdx(null);
    setDelivInput({ id: '', title: '', description: '', category: 'ai', sampleContent: '', iconName: 'FileText' });
    showToast('Deliverable berhasil disimpan!');
  };

  // ─── SPEAKERS ───────────────────────────────────────────────────────────────
  const speakerFormRef = useRef<HTMLFormElement>(null);
  const [editingSpeakerIdx, setEditingSpeakerIdx] = useState<number | null>(null);
  const [speakerInput, setSpeakerInput] = useState<Speaker>({
    id: '', name: '', role: '', cert: '', bio: '', initials: '', imageUrl: ''
  });

  const handleSpeakerPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setSpeakerInput(prev => ({ ...prev, imageUrl: reader.result as string }));
    reader.readAsDataURL(file);
  };

  const handleSaveSpeaker = (e: React.FormEvent) => {
    e.preventDefault();
    if (!speakerInput.name.trim()) return;
    const list = [...content.speakers];
    const item = {
      ...speakerInput,
      id: speakerInput.id || `spk-${Date.now()}`,
      initials: speakerInput.initials || speakerInput.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase(),
    };
    if (editingSpeakerIdx !== null) list[editingSpeakerIdx] = item;
    else list.push(item);
    setSpeakers(list);
    setEditingSpeakerIdx(null);
    setSpeakerInput({ id: '', name: '', role: '', cert: '', bio: '', initials: '', imageUrl: '' });
    showToast('Data pemateri berhasil disimpan!');
  };

  // ─── TESTIMONIALS ───────────────────────────────────────────────────────────
  const testiFormRef = useRef<HTMLFormElement>(null);
  const [editingTestiIdx, setEditingTestiIdx] = useState<number | null>(null);
  const [testiInput, setTestiInput] = useState<Testimonial>({
    id: '', quote: '', name: '', role: '', company: '', initials: ''
  });

  const handleSaveTesti = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testiInput.name.trim()) return;
    const list = [...content.testimonials];
    const item = {
      ...testiInput,
      id: testiInput.id || `testi-${Date.now()}`,
      initials: testiInput.initials || testiInput.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase(),
    };
    if (editingTestiIdx !== null) list[editingTestiIdx] = item;
    else list.push(item);
    setTestimonials(list);
    setEditingTestiIdx(null);
    setTestiInput({ id: '', quote: '', name: '', role: '', company: '', initials: '' });
    showToast('Testimoni berhasil disimpan!');
  };

  // ─── PRICING ────────────────────────────────────────────────────────────────
  const pricingFormRef = useRef<HTMLFormElement>(null);
  const [editingPricingIdx, setEditingPricingIdx] = useState<number | null>(null);
  const [pricingInput, setPricingInput] = useState<PricingPackage>({
    id: 'online', name: '', pricePerPax: 0, location: '', features: [], bonuses: [], isRecommended: false
  });
  const [featuresText, setFeaturesText] = useState('');
  const [bonusesText, setBonusesText] = useState('');

  const handleSavePricing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pricingInput.name.trim()) return;
    const list = [...content.pricingPackages];
    const item = {
      ...pricingInput,
      features: featuresText.split('\n').map(s => s.trim()).filter(Boolean),
      bonuses: bonusesText.split('\n').map(s => s.trim()).filter(Boolean),
    };
    if (editingPricingIdx !== null) list[editingPricingIdx] = item;
    else list.push(item as PricingPackage);
    setPricingPackages(list);
    setEditingPricingIdx(null);
    setPricingInput({ id: 'online', name: '', pricePerPax: 0, location: '', features: [], bonuses: [], isRecommended: false });
    setFeaturesText('');
    setBonusesText('');
    showToast('Paket harga berhasil disimpan!');
  };

  // ─── FAQ ─────────────────────────────────────────────────────────────────────
  const faqFormRef = useRef<HTMLFormElement>(null);
  const [editingFaqIdx, setEditingFaqIdx] = useState<number | null>(null);
  const [faqInput, setFaqInput] = useState<FaqItem>({ id: '', question: '', answer: '', category: 'Umum' });

  const handleSaveFaq = (e: React.FormEvent) => {
    e.preventDefault();
    if (!faqInput.question.trim()) return;
    const list = [...content.faqItems];
    const item = { ...faqInput, id: faqInput.id || `faq-${Date.now()}` };
    if (editingFaqIdx !== null) list[editingFaqIdx] = item;
    else list.push(item);
    setFaqItems(list);
    setEditingFaqIdx(null);
    setFaqInput({ id: '', question: '', answer: '', category: 'Umum' });
    showToast('FAQ berhasil disimpan!');
  };

  // ─── BRANDS ─────────────────────────────────────────────────────────────────
  const brandFormRef = useRef<HTMLFormElement>(null);
  const [brandInput, setBrandInput] = useState<TrustedBrand>({ name: '', logo: '' });
  const [editingBrandIdx, setEditingBrandIdx] = useState<number | null>(null);

  const handleBrandLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setBrandInput(prev => ({ ...prev, logo: reader.result as string }));
    reader.readAsDataURL(file);
  };

  const handleSaveBrand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandInput.name.trim()) return;
    const list = [...content.trustedBrands];
    if (editingBrandIdx !== null) list[editingBrandIdx] = brandInput;
    else list.push(brandInput);
    setTrustedBrands(list);
    setEditingBrandIdx(null);
    setBrandInput({ name: '', logo: '' });
    showToast('Brand berhasil disimpan!');
  };

  // ─── AI TOOLS ─────────────────────────────────────────────────────────────────
  const aiToolFormRef = useRef<HTMLFormElement>(null);
  const [editingAiToolIdx, setEditingAiToolIdx] = useState<number | null>(null);
  const [aiToolInput, setAiToolInput] = useState<AiTool>({ name: '', logo: '' });

  const handleAiToolLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setAiToolInput(prev => ({ ...prev, logo: reader.result as string }));
    reader.readAsDataURL(file);
  };

  const handleSaveAiTool = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiToolInput.name.trim()) return;
    const list = [...content.aiTools];
    if (editingAiToolIdx !== null) list[editingAiToolIdx] = aiToolInput;
    else list.push(aiToolInput);
    setAiTools(list);
    setEditingAiToolIdx(null);
    setAiToolInput({ name: '', logo: '' });
    showToast('AI Tool berhasil disimpan!');
  };

  // ─── PROGRAM PILLARS ────────────────────────────────────────────────────────
  const programFormRef = useRef<HTMLFormElement>(null);
  const [editingProgramIdx, setEditingProgramIdx] = useState<number | null>(null);
  const [programInput, setProgramInput] = useState<ProgramPillar>({
    day: '', title: '', subtitle: '', description: '', icon: 'Sparkles', points: []
  });
  const [programPointsText, setProgramPointsText] = useState('');

  const handleSaveProgram = (e: React.FormEvent) => {
    e.preventDefault();
    if (!programInput.title.trim()) return;
    const list = [...content.programPillars];
    const item = { ...programInput, points: programPointsText.split('\n').map(s => s.trim()).filter(Boolean) };
    if (editingProgramIdx !== null) list[editingProgramIdx] = item;
    else list.push(item);
    setProgramPillars(list);
    setEditingProgramIdx(null);
    setProgramInput({ day: '', title: '', subtitle: '', description: '', icon: 'Sparkles', points: [] });
    setProgramPointsText('');
    showToast('Program pilar berhasil disimpan!');
  };

  // ─── Sidebar Tabs ───────────────────────────────────────────────────────────
  const tabs: { id: TabId; label: string; icon: React.ReactNode; count?: number }[] = [
    { id: 'hero', label: 'Hero Section Text', icon: <Sparkles className="w-4 h-4 text-amber-400" /> },
    { id: 'event', label: 'Detail Event & Kontak', icon: <Settings className="w-4 h-4" /> },
    { id: 'videos', label: 'Video Embed Links', icon: <Video className="w-4 h-4" /> },
    { id: 'pain_points', label: 'Pain Points Masalah', icon: <Target className="w-4 h-4" />, count: content.painPoints.length },
    { id: 'program', label: 'Program 2 Hari', icon: <BookOpen className="w-4 h-4" />, count: content.programPillars.length },
    { id: 'deliverables', label: 'Deliverables Output', icon: <Package className="w-4 h-4" />, count: content.deliverables.length },
    { id: 'speakers', label: 'Pemateri & Mentor', icon: <Users className="w-4 h-4" />, count: content.speakers.length },
    { id: 'testimonials', label: 'Testimoni Alumni', icon: <Star className="w-4 h-4" />, count: content.testimonials.length },
    { id: 'pricing', label: 'Paket Harga', icon: <DollarSign className="w-4 h-4" />, count: content.pricingPackages.length },
    { id: 'faqs', label: 'Tanya Jawab (FAQ)', icon: <HelpCircle className="w-4 h-4" />, count: content.faqItems.length },
    { id: 'brands', label: 'Brand & Klien', icon: <Building2 className="w-4 h-4" />, count: content.trustedBrands.length },
    { id: 'ai_tools', label: 'Daftar AI Tools', icon: <Cpu className="w-4 h-4" />, count: content.aiTools.length },
  ];

  const inputClass = "w-full bg-slate-900 border border-slate-700 focus:border-[#1B4FD8] rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-500 outline-none transition-colors";
  const labelClass = "block text-xs font-semibold text-slate-300 mb-1";
  const btnPrimary = "px-5 py-2.5 bg-[#1B4FD8] hover:bg-blue-600 text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-2 cursor-pointer";
  const btnSecondary = "px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs rounded-xl cursor-pointer transition-colors";
  const btnDanger = "p-2 bg-slate-800 hover:bg-red-500/20 text-red-400 rounded-lg cursor-pointer border border-slate-700 transition-colors";
  const btnEdit = "p-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg cursor-pointer transition-colors";

  return (
    <div className="flex h-screen bg-[#060E1C] font-sans overflow-hidden">

      {/* Toast */}
      {toast && (
        <div className="fixed top-5 right-5 z-50 bg-emerald-600 text-white text-xs font-bold px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
          <Check className="w-4 h-4" /> {toast}
        </div>
      )}

      {/* ─── SIDEBAR ────────────────────────────────────────────────────────── */}
      <aside className="w-72 flex flex-col bg-[#0A1526] border-r border-slate-800 overflow-y-auto flex-shrink-0">
        <div className="p-5 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#1B4FD8]/20 border border-[#1B4FD8]/40 flex items-center justify-center">
              <Settings className="w-4 h-4 text-[#1B4FD8]" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">CMS Admin</h2>
              <p className="text-[10px] text-slate-500 font-mono">Future of Work · MAXY</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#1B4FD8] text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-3">
                {tab.icon} {tab.label}
              </div>
              {tab.count !== undefined && (
                <span className="text-[10px] bg-slate-800/80 px-2 py-0.5 rounded-md font-mono">{tab.count}</span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-slate-800 space-y-2">
          <button
            onClick={onBackToSite}
            className="w-full flex items-center justify-center gap-2 bg-slate-800/60 hover:bg-slate-700 text-slate-300 border border-slate-700 px-4 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" /> Lihat Landing Page
          </button>
          <button
            onClick={onLogout}
            className="w-full flex items-center justify-center gap-2 bg-slate-800/60 hover:bg-red-500/20 text-red-400 border border-slate-700 px-4 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </aside>

      {/* ─── MAIN CONTENT ──────────────────────────────────────────────────── */}
      <main className="flex-1 flex flex-col overflow-hidden bg-[#0B1120]">
        {/* Header */}
        <header className="bg-[#0B1120] border-b border-slate-800 px-8 py-5 flex justify-between items-center flex-shrink-0">
          <div>
            <h1 className="text-base font-bold text-white uppercase tracking-wider">
              {tabs.find(t => t.id === activeTab)?.label}
            </h1>
            <p className="text-slate-500 text-xs mt-0.5 font-mono">Admin Dashboard · The Future of Work</p>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-6 md:p-8">

          {/* ─── TAB: HERO SECTION ─────────────────────────────────────────── */}
          {activeTab === 'hero' && (
            <div className="max-w-3xl space-y-6">
              <form onSubmit={handleSaveHero} className="bg-[#111827] p-6 rounded-2xl border border-slate-800 space-y-5">
                <h3 className="font-bold text-sm text-white">Edit Teks Hero Section</h3>

                <div>
                  <label className={labelClass}>Eyebrow (Teks Atas Sub-Judul)</label>
                  <input className={inputClass} value={heroForm.eyebrowText} onChange={e => setHeroForm(p => ({...p, eyebrowText: e.target.value}))} />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Headline Utama</label>
                    <input className={inputClass} value={heroForm.headlineText} onChange={e => setHeroForm(p => ({...p, headlineText: e.target.value}))} />
                  </div>
                  <div>
                    <label className={labelClass}>Headline Highlight (Teks Biru)</label>
                    <input className={inputClass} value={heroForm.headlineHighlight} onChange={e => setHeroForm(p => ({...p, headlineHighlight: e.target.value}))} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Deskripsi Utama (Paragraf)</label>
                  <textarea rows={3} className={inputClass} value={heroForm.descriptionText} onChange={e => setHeroForm(p => ({...p, descriptionText: e.target.value}))} />
                </div>

                <div>
                  <label className={labelClass}>Callout Highlight (Teks Italic Border Biru)</label>
                  <textarea rows={2} className={inputClass} value={heroForm.calloutText} onChange={e => setHeroForm(p => ({...p, calloutText: e.target.value}))} />
                </div>

                <div>
                  <label className={labelClass}>Poin-poin Keunggulan / Bullets (1 per baris)</label>
                  <textarea rows={4} className={inputClass} value={heroBulletsText} onChange={e => setHeroBulletsText(e.target.value)} />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Teks Tombol CTA Utama</label>
                    <input className={inputClass} value={heroForm.ctaPrimaryText} onChange={e => setHeroForm(p => ({...p, ctaPrimaryText: e.target.value}))} />
                  </div>
                  <div>
                    <label className={labelClass}>Teks Tombol CTA Sekunder</label>
                    <input className={inputClass} value={heroForm.ctaSecondaryText} onChange={e => setHeroForm(p => ({...p, ctaSecondaryText: e.target.value}))} />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button type="submit" className={btnPrimary}><Save className="w-4 h-4" /> Simpan Hero Section</button>
                </div>
              </form>
            </div>
          )}

          {/* ─── TAB: EVENT DETAILS ─────────────────────────────────────────── */}
          {activeTab === 'event' && (
            <div className="max-w-3xl space-y-6">
              <form onSubmit={handleSaveEvent} className="bg-[#111827] p-6 rounded-2xl border border-slate-800 space-y-5">
                <h3 className="font-bold text-sm text-white">Detail Event & Kontak Admin</h3>

                <div>
                  <label className={labelClass}>Judul Event</label>
                  <input className={inputClass} value={eventForm.title} onChange={e => setEventForm(p => ({...p, title: e.target.value}))} />
                </div>
                <div>
                  <label className={labelClass}>Subtitle</label>
                  <textarea rows={3} className={inputClass} value={eventForm.subtitle} onChange={e => setEventForm(p => ({...p, subtitle: e.target.value}))} />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Tanggal (Teks)</label>
                    <input className={inputClass} placeholder="28 & 29 Juli 2026" value={eventForm.dateText} onChange={e => setEventForm(p => ({...p, dateText: e.target.value}))} />
                  </div>
                  <div>
                    <label className={labelClass}>Jam (Teks)</label>
                    <input className={inputClass} placeholder="08.30 – 17.00 WIB" value={eventForm.timeText} onChange={e => setEventForm(p => ({...p, timeText: e.target.value}))} />
                  </div>
                  <div>
                    <label className={labelClass}>Lokasi Singkat</label>
                    <input className={inputClass} value={eventForm.location} onChange={e => setEventForm(p => ({...p, location: e.target.value}))} />
                  </div>
                  <div>
                    <label className={labelClass}>Alamat Lengkap</label>
                    <input className={inputClass} value={eventForm.fullAddress} onChange={e => setEventForm(p => ({...p, fullAddress: e.target.value}))} />
                  </div>
                  <div>
                    <label className={labelClass}>Nama Admin (CS)</label>
                    <input className={inputClass} value={eventForm.adminName} onChange={e => setEventForm(p => ({...p, adminName: e.target.value}))} />
                  </div>
                  <div>
                    <label className={labelClass}>Nomor HP Admin (format: +62...)</label>
                    <input className={inputClass} value={eventForm.adminPhone} onChange={e => setEventForm(p => ({...p, adminPhone: e.target.value}))} />
                  </div>
                  <div>
                    <label className={labelClass}>Raw Phone (wa.me format: 628...)</label>
                    <input className={inputClass} value={eventForm.rawPhone} onChange={e => setEventForm(p => ({...p, rawPhone: e.target.value}))} />
                  </div>
                  <div>
                    <label className={labelClass}>Target Countdown (ISO Date)</label>
                    <input className={inputClass} placeholder="2026-07-28T08:30:00+07:00" value={eventForm.countdownTargetDate} onChange={e => setEventForm(p => ({...p, countdownTargetDate: e.target.value}))} />
                  </div>
                  <div>
                    <label className={labelClass}>Early Bird Count</label>
                    <input type="number" className={inputClass} value={eventForm.earlyBirdCount} onChange={e => setEventForm(p => ({...p, earlyBirdCount: Number(e.target.value)}))} />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button type="submit" className={btnPrimary}><Save className="w-4 h-4" /> Simpan Detail Event</button>
                </div>
              </form>
            </div>
          )}

          {/* ─── TAB: VIDEOS ─────────────────────────────────────────────────── */}
          {activeTab === 'videos' && (
            <div className="max-w-3xl space-y-5">
              {(['hero', 'testimoni', 'portfolioBatch1', 'portfolioBatch2'] as const).map(key => (
                <form key={key} onSubmit={e => handleSaveVideo(e, key)} className="bg-[#111827] p-6 rounded-2xl border border-slate-800 space-y-4">
                  <h4 className="font-bold text-sm text-white flex items-center gap-2">
                    <Video className="w-4 h-4 text-cyan-400" />
                    {{
                      hero: 'Video Hero',
                      testimoni: 'Video Testimoni',
                      portfolioBatch1: 'Video Portfolio Batch 1',
                      portfolioBatch2: 'Video Portfolio Batch 2',
                    }[key]}
                  </h4>
                  <div>
                    <label className={labelClass}>Judul Video</label>
                    <input className={inputClass} value={videoForms[key].title} onChange={e => setVideoForms(p => ({...p, [key]: {...p[key], title: e.target.value}}))} />
                  </div>
                  <div>
                    <label className={labelClass}>URL Instagram Reel</label>
                    <input className={inputClass} value={videoForms[key].url} onChange={e => setVideoForms(p => ({...p, [key]: {...p[key], url: e.target.value}}))} placeholder="https://www.instagram.com/reel/..." />
                  </div>
                  <div>
                    <label className={labelClass}>Thumbnail Video (Upload Image File)</label>
                    <div className="flex items-center gap-3">
                      <label className="flex-1 bg-slate-900 border border-slate-700 hover:border-slate-600 rounded-xl px-3 py-2.5 text-xs text-slate-300 flex items-center justify-center gap-2 cursor-pointer font-bold transition-colors">
                        <Upload className="w-3.5 h-3.5 text-cyan-400" /> {videoForms[key].thumbnailSrc ? 'Ganti Thumbnail Image' : 'Upload Thumbnail Image'}
                        <input type="file" accept="image/*" onChange={e => handleVideoThumbnailUpload(key, e)} className="hidden" />
                      </label>
                      {videoForms[key].thumbnailSrc && (
                        <div className="w-16 h-10 rounded-xl overflow-hidden bg-black border border-slate-700 shrink-0">
                          <img src={videoForms[key].thumbnailSrc} alt="thumbnail preview" className="w-full h-full object-cover" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Deskripsi Singkat</label>
                    <textarea rows={2} className={inputClass} value={videoForms[key].description} onChange={e => setVideoForms(p => ({...p, [key]: {...p[key], description: e.target.value}}))} />
                  </div>
                  <div className="flex justify-end">
                    <button type="submit" className={btnPrimary}><Save className="w-4 h-4" /> Simpan</button>
                  </div>
                </form>
              ))}
            </div>
          )}

          {/* ─── TAB: PAIN POINTS ───────────────────────────────────────────── */}
          {activeTab === 'pain_points' && (
            <div className="max-w-3xl space-y-5">
              <form ref={painFormRef} onSubmit={handleSavePain} className={`p-6 rounded-2xl border space-y-4 ${editingPainIdx !== null ? 'bg-amber-950/20 border-amber-500/40' : 'bg-[#111827] border-slate-800'}`}>
                <h4 className="font-bold text-sm text-white">{editingPainIdx !== null ? `Edit Pain Point #${editingPainIdx + 1}` : 'Tambah Pain Point Baru'}</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Icon Name (Lucide)</label>
                    <input className={inputClass} placeholder="Flame / UserX / Clock / TrendingDown" value={painInput.icon} onChange={e => setPainInput(p => ({...p, icon: e.target.value}))} />
                  </div>
                  <div>
                    <label className={labelClass}>Judul</label>
                    <input className={inputClass} value={painInput.title} onChange={e => setPainInput(p => ({...p, title: e.target.value}))} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Deskripsi</label>
                  <textarea rows={3} className={inputClass} value={painInput.description} onChange={e => setPainInput(p => ({...p, description: e.target.value}))} />
                </div>
                <div className="flex justify-end gap-2">
                  {editingPainIdx !== null && <button type="button" onClick={() => { setEditingPainIdx(null); setPainInput({ icon: '', title: '', description: '' }); }} className={btnSecondary}>Batal</button>}
                  <button type="submit" className={btnPrimary}><Save className="w-4 h-4" /> {editingPainIdx !== null ? 'Simpan' : 'Tambah'}</button>
                </div>
              </form>

              <div className="space-y-3">
                <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider">Daftar Pain Points ({content.painPoints.length})</h4>
                {content.painPoints.map((item, idx) => (
                  <div key={idx} className="bg-[#111827] p-4 rounded-xl border border-slate-800 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <div className="font-bold text-xs text-white flex items-center gap-2">
                        <span className="text-slate-400 font-mono text-[11px]">[{item.icon}]</span> {item.title}
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{item.description}</p>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <button onClick={() => { setEditingPainIdx(idx); setPainInput(item); setTimeout(() => painFormRef.current?.scrollIntoView({ behavior: 'smooth' }), 50); }} className={btnEdit}><Edit2 className="w-3.5 h-3.5" /></button>
                      <button onClick={() => { if (window.confirm('Hapus?')) { setPainPoints(content.painPoints.filter((_, i) => i !== idx)); showToast('Dihapus!'); }}} className={btnDanger}><Trash2 className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── TAB: PROGRAM PILLARS ───────────────────────────────────────── */}
          {activeTab === 'program' && (
            <div className="max-w-3xl space-y-5">
              <form ref={programFormRef} onSubmit={handleSaveProgram} className={`p-6 rounded-2xl border space-y-4 ${editingProgramIdx !== null ? 'bg-blue-950/20 border-blue-500/40' : 'bg-[#111827] border-slate-800'}`}>
                <h4 className="font-bold text-sm text-white">{editingProgramIdx !== null ? 'Edit Program Pilar' : 'Tambah Program Pilar'}</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Label Hari (mis: HARI 1 · FONDASI)</label>
                    <input className={inputClass} value={programInput.day} onChange={e => setProgramInput(p => ({...p, day: e.target.value}))} />
                  </div>
                  <div>
                    <label className={labelClass}>Judul</label>
                    <input className={inputClass} value={programInput.title} onChange={e => setProgramInput(p => ({...p, title: e.target.value}))} />
                  </div>
                  <div>
                    <label className={labelClass}>Subtitle</label>
                    <input className={inputClass} value={programInput.subtitle} onChange={e => setProgramInput(p => ({...p, subtitle: e.target.value}))} />
                  </div>
                  <div>
                    <label className={labelClass}>Deskripsi Singkat</label>
                    <input className={inputClass} value={programInput.description} onChange={e => setProgramInput(p => ({...p, description: e.target.value}))} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Poin-poin Materi (1 per baris)</label>
                  <textarea rows={5} className={inputClass} value={programPointsText} onChange={e => setProgramPointsText(e.target.value)} />
                </div>
                <div className="flex justify-end gap-2">
                  {editingProgramIdx !== null && <button type="button" onClick={() => { setEditingProgramIdx(null); setProgramInput({ day: '', title: '', subtitle: '', description: '', icon: 'Sparkles', points: [] }); setProgramPointsText(''); }} className={btnSecondary}>Batal</button>}
                  <button type="submit" className={btnPrimary}><Save className="w-4 h-4" /> {editingProgramIdx !== null ? 'Simpan' : 'Tambah'}</button>
                </div>
              </form>

              <div className="space-y-3">
                <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider">Daftar Program ({content.programPillars.length})</h4>
                {content.programPillars.map((item, idx) => (
                  <div key={idx} className="bg-[#111827] p-4 rounded-xl border border-slate-800 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <div className="font-bold text-xs text-white">{item.title}</div>
                      <p className="text-[11px] text-slate-400 mt-0.5">{item.day} · {item.points.length} poin</p>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <button onClick={() => { setEditingProgramIdx(idx); setProgramInput(item); setProgramPointsText(item.points.join('\n')); setTimeout(() => programFormRef.current?.scrollIntoView({ behavior: 'smooth' }), 50); }} className={btnEdit}><Edit2 className="w-3.5 h-3.5" /></button>
                      <button onClick={() => { if (window.confirm('Hapus?')) { setProgramPillars(content.programPillars.filter((_, i) => i !== idx)); showToast('Dihapus!'); }}} className={btnDanger}><Trash2 className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── TAB: DELIVERABLES ─────────────────────────────────────────── */}
          {activeTab === 'deliverables' && (
            <div className="max-w-3xl space-y-5">
              <form ref={delivFormRef} onSubmit={handleSaveDeliv} className={`p-6 rounded-2xl border space-y-4 ${editingDelivIdx !== null ? 'bg-cyan-950/20 border-cyan-500/40' : 'bg-[#111827] border-slate-800'}`}>
                <h4 className="font-bold text-sm text-white">{editingDelivIdx !== null ? 'Edit Deliverable' : 'Tambah Deliverable Baru'}</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Judul Deliverable</label>
                    <input className={inputClass} value={delivInput.title} onChange={e => setDelivInput(p => ({...p, title: e.target.value}))} />
                  </div>
                  <div>
                    <label className={labelClass}>Kategori</label>
                    <select className={inputClass} value={delivInput.category} onChange={e => setDelivInput(p => ({...p, category: e.target.value as Deliverable['category']}))}>
                      <option value="ai">AI</option>
                      <option value="strategy">Strategy</option>
                      <option value="happiness">Happiness</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Deskripsi Singkat</label>
                  <input className={inputClass} value={delivInput.description} onChange={e => setDelivInput(p => ({...p, description: e.target.value}))} />
                </div>
                <div>
                  <label className={labelClass}>Sample Content / Preview Template</label>
                  <textarea rows={5} className={inputClass} value={delivInput.sampleContent} onChange={e => setDelivInput(p => ({...p, sampleContent: e.target.value}))} />
                </div>
                <div className="flex justify-end gap-2">
                  {editingDelivIdx !== null && <button type="button" onClick={() => { setEditingDelivIdx(null); setDelivInput({ id: '', title: '', description: '', category: 'ai', sampleContent: '', iconName: 'FileText' }); }} className={btnSecondary}>Batal</button>}
                  <button type="submit" className={btnPrimary}><Save className="w-4 h-4" /> {editingDelivIdx !== null ? 'Simpan' : 'Tambah'}</button>
                </div>
              </form>

              <div className="space-y-3">
                <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider">Daftar Deliverables ({content.deliverables.length})</h4>
                {content.deliverables.map((item, idx) => (
                  <div key={idx} className="bg-[#111827] p-4 rounded-xl border border-slate-800 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <div className="font-bold text-xs text-white">{item.title}</div>
                      <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{item.description}</p>
                      <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-md font-mono">{item.category}</span>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <button onClick={() => { setEditingDelivIdx(idx); setDelivInput(item); setTimeout(() => delivFormRef.current?.scrollIntoView({ behavior: 'smooth' }), 50); }} className={btnEdit}><Edit2 className="w-3.5 h-3.5" /></button>
                      <button onClick={() => { if (window.confirm('Hapus?')) { setDeliverables(content.deliverables.filter((_, i) => i !== idx)); showToast('Dihapus!'); }}} className={btnDanger}><Trash2 className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── TAB: SPEAKERS ──────────────────────────────────────────────── */}
          {activeTab === 'speakers' && (
            <div className="max-w-3xl space-y-5">
              <form ref={speakerFormRef} onSubmit={handleSaveSpeaker} className={`p-6 rounded-2xl border space-y-4 ${editingSpeakerIdx !== null ? 'bg-blue-950/20 border-blue-500/40' : 'bg-[#111827] border-slate-800'}`}>
                <h4 className="font-bold text-sm text-white">{editingSpeakerIdx !== null ? 'Edit Pemateri' : 'Tambah Pemateri Baru'}</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Nama Lengkap + Gelar</label>
                    <input className={inputClass} value={speakerInput.name} onChange={e => setSpeakerInput(p => ({...p, name: e.target.value}))} />
                  </div>
                  <div>
                    <label className={labelClass}>Jabatan / Role</label>
                    <input className={inputClass} value={speakerInput.role} onChange={e => setSpeakerInput(p => ({...p, role: e.target.value}))} />
                  </div>
                  <div>
                    <label className={labelClass}>Sertifikasi / Badge</label>
                    <input className={inputClass} value={speakerInput.cert} onChange={e => setSpeakerInput(p => ({...p, cert: e.target.value}))} />
                  </div>
                  <div>
                    <label className={labelClass}>Inisial (2 huruf)</label>
                    <input className={inputClass} maxLength={2} value={speakerInput.initials} onChange={e => setSpeakerInput(p => ({...p, initials: e.target.value.toUpperCase()}))} placeholder="RS" />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Bio / Deskripsi</label>
                  <textarea rows={3} className={inputClass} value={speakerInput.bio} onChange={e => setSpeakerInput(p => ({...p, bio: e.target.value}))} />
                </div>
                <div>
                  <label className={labelClass}>Foto Pemateri (Upload Image File)</label>
                  <div className="flex items-center gap-3">
                    <label className="flex-1 bg-slate-900 border border-slate-700 hover:border-slate-600 rounded-xl px-3 py-2.5 text-xs text-slate-300 flex items-center justify-center gap-2 cursor-pointer font-bold transition-colors">
                      <Upload className="w-3.5 h-3.5 text-cyan-400" /> {speakerInput.imageUrl ? 'Ganti Foto' : 'Upload Foto'}
                      <input type="file" accept="image/*" onChange={handleSpeakerPhotoUpload} className="hidden" />
                    </label>
                    {speakerInput.imageUrl && (
                      <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-700 shrink-0">
                        <img src={speakerInput.imageUrl} alt="preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  {editingSpeakerIdx !== null && <button type="button" onClick={() => { setEditingSpeakerIdx(null); setSpeakerInput({ id: '', name: '', role: '', cert: '', bio: '', initials: '', imageUrl: '' }); }} className={btnSecondary}>Batal</button>}
                  <button type="submit" className={btnPrimary}><Save className="w-4 h-4" /> {editingSpeakerIdx !== null ? 'Simpan' : 'Tambah'}</button>
                </div>
              </form>

              <div className="space-y-3">
                <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider">Daftar Pemateri ({content.speakers.length})</h4>
                {content.speakers.map((item, idx) => (
                  <div key={idx} className="bg-[#111827] p-4 rounded-xl border border-slate-800 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-800 shrink-0 border border-slate-700">
                        {item.imageUrl ? <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-amber-400 font-bold text-sm">{item.initials}</div>}
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-xs text-white truncate">{item.name}</div>
                        <p className="text-[11px] text-slate-400 truncate">{item.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <button onClick={() => { setEditingSpeakerIdx(idx); setSpeakerInput(item); setTimeout(() => speakerFormRef.current?.scrollIntoView({ behavior: 'smooth' }), 50); }} className={btnEdit}><Edit2 className="w-3.5 h-3.5" /></button>
                      <button onClick={() => { if (window.confirm('Hapus?')) { setSpeakers(content.speakers.filter((_, i) => i !== idx)); showToast('Dihapus!'); }}} className={btnDanger}><Trash2 className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── TAB: TESTIMONIALS ─────────────────────────────────────────── */}
          {activeTab === 'testimonials' && (
            <div className="max-w-3xl space-y-5">
              <form ref={testiFormRef} onSubmit={handleSaveTesti} className={`p-6 rounded-2xl border space-y-4 ${editingTestiIdx !== null ? 'bg-amber-950/20 border-amber-500/40' : 'bg-[#111827] border-slate-800'}`}>
                <h4 className="font-bold text-sm text-white">{editingTestiIdx !== null ? 'Edit Testimoni' : 'Tambah Testimoni Baru'}</h4>
                <div>
                  <label className={labelClass}>Kutipan Testimoni</label>
                  <textarea rows={4} className={inputClass} placeholder="&ldquo;Tulis kutipan testimoni di sini...&rdquo;" value={testiInput.quote} onChange={e => setTestiInput(p => ({...p, quote: e.target.value}))} />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className={labelClass}>Nama</label>
                    <input className={inputClass} value={testiInput.name} onChange={e => setTestiInput(p => ({...p, name: e.target.value}))} />
                  </div>
                  <div>
                    <label className={labelClass}>Jabatan</label>
                    <input className={inputClass} value={testiInput.role} onChange={e => setTestiInput(p => ({...p, role: e.target.value}))} />
                  </div>
                  <div>
                    <label className={labelClass}>Perusahaan</label>
                    <input className={inputClass} value={testiInput.company} onChange={e => setTestiInput(p => ({...p, company: e.target.value}))} />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  {editingTestiIdx !== null && <button type="button" onClick={() => { setEditingTestiIdx(null); setTestiInput({ id: '', quote: '', name: '', role: '', company: '', initials: '' }); }} className={btnSecondary}>Batal</button>}
                  <button type="submit" className={btnPrimary}><Save className="w-4 h-4" /> {editingTestiIdx !== null ? 'Simpan' : 'Tambah'}</button>
                </div>
              </form>

              <div className="space-y-3">
                <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider">Daftar Testimoni ({content.testimonials.length})</h4>
                {content.testimonials.map((item, idx) => (
                  <div key={idx} className="bg-[#111827] p-4 rounded-xl border border-slate-800 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-xs text-slate-300 italic line-clamp-2">&ldquo;{item.quote}&rdquo;</p>
                      <div className="text-[11px] text-slate-400 mt-1 font-semibold">{item.name} · {item.role} · {item.company}</div>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <button onClick={() => { setEditingTestiIdx(idx); setTestiInput(item); setTimeout(() => testiFormRef.current?.scrollIntoView({ behavior: 'smooth' }), 50); }} className={btnEdit}><Edit2 className="w-3.5 h-3.5" /></button>
                      <button onClick={() => { if (window.confirm('Hapus?')) { setTestimonials(content.testimonials.filter((_, i) => i !== idx)); showToast('Dihapus!'); }}} className={btnDanger}><Trash2 className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── TAB: PRICING ───────────────────────────────────────────────── */}
          {activeTab === 'pricing' && (
            <div className="max-w-3xl space-y-5">
              <form ref={pricingFormRef} onSubmit={handleSavePricing} className={`p-6 rounded-2xl border space-y-4 ${editingPricingIdx !== null ? 'bg-emerald-950/20 border-emerald-500/40' : 'bg-[#111827] border-slate-800'}`}>
                <h4 className="font-bold text-sm text-white">{editingPricingIdx !== null ? 'Edit Paket Harga' : 'Tambah Paket Harga Baru'}</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Nama Paket</label>
                    <input className={inputClass} value={pricingInput.name} onChange={e => setPricingInput(p => ({...p, name: e.target.value}))} />
                  </div>
                  <div>
                    <label className={labelClass}>Harga per Pax (angka)</label>
                    <input type="number" className={inputClass} value={pricingInput.pricePerPax} onChange={e => setPricingInput(p => ({...p, pricePerPax: Number(e.target.value)}))} />
                  </div>
                  <div>
                    <label className={labelClass}>Keterangan Lokasi</label>
                    <input className={inputClass} value={pricingInput.location} onChange={e => setPricingInput(p => ({...p, location: e.target.value}))} placeholder="per peserta · MAXY AI HUB" />
                  </div>
                  <div className="flex items-center gap-3 pt-4">
                    <input type="checkbox" id="recommended" checked={!!pricingInput.isRecommended} onChange={e => setPricingInput(p => ({...p, isRecommended: e.target.checked}))} className="w-4 h-4 accent-amber-400" />
                    <label htmlFor="recommended" className="text-xs font-semibold text-slate-300">Tandai sebagai RECOMMENDED</label>
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Fitur (1 per baris)</label>
                  <textarea rows={5} className={inputClass} value={featuresText} onChange={e => setFeaturesText(e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Bonus ★ (1 per baris, opsional)</label>
                  <textarea rows={3} className={inputClass} value={bonusesText} onChange={e => setBonusesText(e.target.value)} />
                </div>
                <div className="flex justify-end gap-2">
                  {editingPricingIdx !== null && <button type="button" onClick={() => { setEditingPricingIdx(null); setPricingInput({ id: 'online', name: '', pricePerPax: 0, location: '', features: [], bonuses: [], isRecommended: false }); setFeaturesText(''); setBonusesText(''); }} className={btnSecondary}>Batal</button>}
                  <button type="submit" className={btnPrimary}><Save className="w-4 h-4" /> {editingPricingIdx !== null ? 'Simpan' : 'Tambah'}</button>
                </div>
              </form>

              <div className="space-y-3">
                <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider">Daftar Paket ({content.pricingPackages.length})</h4>
                {content.pricingPackages.map((item, idx) => (
                  <div key={idx} className="bg-[#111827] p-4 rounded-xl border border-slate-800 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <div className="font-bold text-xs text-white flex items-center gap-2">{item.name} {item.isRecommended && <span className="text-amber-400 text-[10px]">★ RECOMMENDED</span>}</div>
                      <p className="text-[11px] text-slate-400 mt-0.5">{item.pricePerPax > 0 ? `Rp ${item.pricePerPax.toLocaleString('id-ID')}` : 'Custom'} · {item.features.length} fitur</p>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <button onClick={() => { setEditingPricingIdx(idx); setPricingInput(item); setFeaturesText(item.features.join('\n')); setBonusesText((item.bonuses || []).join('\n')); setTimeout(() => pricingFormRef.current?.scrollIntoView({ behavior: 'smooth' }), 50); }} className={btnEdit}><Edit2 className="w-3.5 h-3.5" /></button>
                      <button onClick={() => { if (window.confirm('Hapus?')) { setPricingPackages(content.pricingPackages.filter((_, i) => i !== idx)); showToast('Dihapus!'); }}} className={btnDanger}><Trash2 className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── TAB: FAQ ────────────────────────────────────────────────────── */}
          {activeTab === 'faqs' && (
            <div className="max-w-3xl space-y-5">
              <form ref={faqFormRef} onSubmit={handleSaveFaq} className={`p-6 rounded-2xl border space-y-4 ${editingFaqIdx !== null ? 'bg-purple-950/20 border-purple-500/40' : 'bg-[#111827] border-slate-800'}`}>
                <h4 className="font-bold text-sm text-white">{editingFaqIdx !== null ? 'Edit FAQ' : 'Tambah FAQ Baru'}</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Pertanyaan</label>
                    <input className={inputClass} value={faqInput.question} onChange={e => setFaqInput(p => ({...p, question: e.target.value}))} />
                  </div>
                  <div>
                    <label className={labelClass}>Kategori</label>
                    <input className={inputClass} placeholder="Umum / Pendaftaran / Program / Harga" value={faqInput.category} onChange={e => setFaqInput(p => ({...p, category: e.target.value}))} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Jawaban</label>
                  <textarea rows={4} className={inputClass} value={faqInput.answer} onChange={e => setFaqInput(p => ({...p, answer: e.target.value}))} />
                </div>
                <div className="flex justify-end gap-2">
                  {editingFaqIdx !== null && <button type="button" onClick={() => { setEditingFaqIdx(null); setFaqInput({ id: '', question: '', answer: '', category: 'Umum' }); }} className={btnSecondary}>Batal</button>}
                  <button type="submit" className={btnPrimary}><Save className="w-4 h-4" /> {editingFaqIdx !== null ? 'Simpan' : 'Tambah'}</button>
                </div>
              </form>

              <div className="space-y-3">
                <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider">Daftar FAQ ({content.faqItems.length})</h4>
                {content.faqItems.map((item, idx) => (
                  <div key={idx} className="bg-[#111827] p-4 rounded-xl border border-slate-800 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <div className="font-bold text-xs text-white line-clamp-1">{item.question}</div>
                      <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{item.answer}</p>
                      <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-md font-mono">{item.category}</span>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <button onClick={() => { setEditingFaqIdx(idx); setFaqInput(item); setTimeout(() => faqFormRef.current?.scrollIntoView({ behavior: 'smooth' }), 50); }} className={btnEdit}><Edit2 className="w-3.5 h-3.5" /></button>
                      <button onClick={() => { if (window.confirm('Hapus?')) { setFaqItems(content.faqItems.filter((_, i) => i !== idx)); showToast('Dihapus!'); }}} className={btnDanger}><Trash2 className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── TAB: BRANDS ─────────────────────────────────────────────────── */}
          {activeTab === 'brands' && (
            <div className="max-w-3xl space-y-5">
              <form ref={brandFormRef} onSubmit={handleSaveBrand} className={`p-6 rounded-2xl border space-y-4 ${editingBrandIdx !== null ? 'bg-slate-800/40 border-slate-600' : 'bg-[#111827] border-slate-800'}`}>
                <h4 className="font-bold text-sm text-white">{editingBrandIdx !== null ? 'Edit Brand/Klien' : 'Tambah Brand/Klien'}</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Nama Brand / Perusahaan</label>
                    <input className={inputClass} value={brandInput.name} onChange={e => setBrandInput(p => ({...p, name: e.target.value}))} placeholder="ASSA, SINARMAS LAND, dll" />
                  </div>
                  <div>
                    <label className={labelClass}>Logo Brand (Upload Image)</label>
                    <div className="flex items-center gap-3">
                      <label className="flex-1 bg-slate-900 border border-slate-700 hover:border-slate-600 rounded-xl px-3 py-2.5 text-xs text-slate-300 flex items-center justify-center gap-2 cursor-pointer font-bold transition-colors">
                        <Upload className="w-3.5 h-3.5 text-cyan-400" /> {brandInput.logo ? 'Ganti Logo' : 'Upload Logo'}
                        <input type="file" accept="image/*" onChange={handleBrandLogoUpload} className="hidden" />
                      </label>
                      {brandInput.logo && (
                        <div className="w-10 h-10 rounded-xl overflow-hidden bg-white p-1 border border-slate-700 shrink-0 flex items-center justify-center">
                          <img src={brandInput.logo} alt="preview" className="max-w-full max-h-full object-contain" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  {editingBrandIdx !== null && <button type="button" onClick={() => { setEditingBrandIdx(null); setBrandInput({ name: '', logo: '' }); }} className={btnSecondary}>Batal</button>}
                  <button type="submit" className={btnPrimary}><Save className="w-4 h-4" /> {editingBrandIdx !== null ? 'Simpan' : 'Tambah'}</button>
                </div>
              </form>

              <div className="space-y-3">
                <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider">Daftar Brand ({content.trustedBrands.length})</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {content.trustedBrands.map((item, idx) => (
                    <div key={idx} className="bg-[#111827] p-3 rounded-xl border border-slate-800 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        {item.logo ? (
                          <div className="w-8 h-8 rounded-lg bg-white p-1 flex items-center justify-center shrink-0 border border-slate-700">
                            <img src={item.logo} alt={item.name} className="max-w-full max-h-full object-contain" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 text-xs font-bold flex items-center justify-center shrink-0">
                            {item.name.substring(0, 2).toUpperCase()}
                          </div>
                        )}
                        <span className="font-bold text-xs text-white truncate">{item.name}</span>
                      </div>
                      <div className="flex gap-1 shrink-0">
                        <button onClick={() => { setEditingBrandIdx(idx); setBrandInput(item); setTimeout(() => brandFormRef.current?.scrollIntoView({ behavior: 'smooth' }), 50); }} className={btnEdit}><Edit2 className="w-3 h-3" /></button>
                        <button onClick={() => { if (window.confirm('Hapus?')) { setTrustedBrands(content.trustedBrands.filter((_, i) => i !== idx)); showToast('Dihapus!'); }}} className={btnDanger}><Trash2 className="w-3 h-3" /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ─── TAB: AI TOOLS ───────────────────────────────────────────────── */}
          {activeTab === 'ai_tools' && (
            <div className="max-w-3xl space-y-5">
              <form ref={aiToolFormRef} onSubmit={handleSaveAiTool} className={`p-6 rounded-2xl border space-y-4 ${editingAiToolIdx !== null ? 'bg-cyan-950/20 border-cyan-500/40' : 'bg-[#111827] border-slate-800'}`}>
                <h4 className="font-bold text-sm text-white">{editingAiToolIdx !== null ? 'Edit AI Tool' : 'Tambah AI Tool Baru'}</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Nama AI Tool</label>
                    <input className={inputClass} value={aiToolInput.name} onChange={e => setAiToolInput(p => ({...p, name: e.target.value}))} placeholder="ChatGPT, Gemini, dll" />
                  </div>
                  <div>
                    <label className={labelClass}>Logo AI Tool (Upload Image)</label>
                    <div className="flex items-center gap-3">
                      <label className="flex-1 bg-slate-900 border border-slate-700 hover:border-slate-600 rounded-xl px-3 py-2.5 text-xs text-slate-300 flex items-center justify-center gap-2 cursor-pointer font-bold transition-colors">
                        <Upload className="w-3.5 h-3.5 text-cyan-400" /> {aiToolInput.logo ? 'Ganti Logo' : 'Upload Logo'}
                        <input type="file" accept="image/*" onChange={handleAiToolLogoUpload} className="hidden" />
                      </label>
                      {aiToolInput.logo && (
                        <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-800 p-1 border border-slate-700 shrink-0 flex items-center justify-center">
                          <img src={aiToolInput.logo} alt="preview" className="max-w-full max-h-full object-contain" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  {editingAiToolIdx !== null && <button type="button" onClick={() => { setEditingAiToolIdx(null); setAiToolInput({ name: '', logo: '' }); }} className={btnSecondary}>Batal</button>}
                  <button type="submit" className={btnPrimary}><Save className="w-4 h-4" /> {editingAiToolIdx !== null ? 'Simpan' : 'Tambah'}</button>
                </div>
              </form>

              <div className="space-y-3">
                <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider">Daftar AI Tools ({content.aiTools.length})</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {content.aiTools.map((item, idx) => (
                    <div key={idx} className="bg-[#111827] p-3 rounded-xl border border-slate-800 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        {item.logo ? (
                          <div className="w-8 h-8 rounded-lg bg-slate-900 p-1 flex items-center justify-center shrink-0 border border-slate-700">
                            <img src={item.logo} alt={item.name} className="max-w-full max-h-full object-contain" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 text-xs font-bold flex items-center justify-center shrink-0">
                            {item.name.substring(0, 2).toUpperCase()}
                          </div>
                        )}
                        <span className="font-bold text-xs text-white truncate">{item.name}</span>
                      </div>
                      <div className="flex gap-1 shrink-0">
                        <button onClick={() => { setEditingAiToolIdx(idx); setAiToolInput(item); setTimeout(() => aiToolFormRef.current?.scrollIntoView({ behavior: 'smooth' }), 50); }} className={btnEdit}><Edit2 className="w-3 h-3" /></button>
                        <button onClick={() => { if (window.confirm('Hapus?')) { setAiTools(content.aiTools.filter((_, i) => i !== idx)); showToast('Dihapus!'); }}} className={btnDanger}><Trash2 className="w-3 h-3" /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};
