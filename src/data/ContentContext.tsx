import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Speaker, Testimonial, Deliverable, PricingPackage, FaqItem
} from '../types';
import {
  EVENT_DETAILS, VIDEO_LINKS, TRUSTED_BRANDS, AI_TOOLS,
  REALITA_PAIN_POINTS, PROGRAM_PILLARS, DELIVERABLES,
  SPEAKERS, TESTIMONIALS, PRICING_PACKAGES, FAQ_ITEMS
} from './landingData';

// ─── Extended Types for CMS ───────────────────────────────────────────────────

export interface EventDetails {
  title: string;
  subtitle: string;
  dateText: string;
  timeText: string;
  location: string;
  fullAddress: string;
  adminName: string;
  adminPhone: string;
  rawPhone: string;
  earlyBirdCount: number;
  countdownTargetDate: string;
}

export interface VideoLink {
  url: string;
  embedUrl: string;
  videoSrc: string;
  thumbnailSrc: string;
  title: string;
  description: string;
}

export interface TrustedBrand {
  name: string;
  logo?: string;
}

export interface AiTool {
  name: string;
  logo: string;
}

export interface PainPoint {
  icon: string;
  title: string;
  description: string;
}

export interface ProgramPillar {
  day: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  points: string[];
}

export interface SiteContent {
  eventDetails: EventDetails;
  videoLinks: {
    hero: VideoLink;
    testimoni: VideoLink;
    portfolioBatch1: VideoLink;
    portfolioBatch2: VideoLink;
  };
  trustedBrands: TrustedBrand[];
  aiTools: AiTool[];
  painPoints: PainPoint[];
  programPillars: ProgramPillar[];
  deliverables: Deliverable[];
  speakers: Speaker[];
  testimonials: Testimonial[];
  pricingPackages: PricingPackage[];
  faqItems: FaqItem[];
}

// ─── Context Interface ─────────────────────────────────────────────────────────

export interface ContentContextType {
  content: SiteContent;
  updateEventDetails: (data: Partial<EventDetails>) => void;
  updateVideoLink: (key: keyof SiteContent['videoLinks'], data: Partial<VideoLink>) => void;
  setTrustedBrands: (brands: TrustedBrand[]) => void;
  setAiTools: (tools: AiTool[]) => void;
  setPainPoints: (points: PainPoint[]) => void;
  setProgramPillars: (pillars: ProgramPillar[]) => void;
  setDeliverables: (deliverables: Deliverable[]) => void;
  setSpeakers: (speakers: Speaker[]) => void;
  setTestimonials: (testimonials: Testimonial[]) => void;
  setPricingPackages: (packages: PricingPackage[]) => void;
  setFaqItems: (faqs: FaqItem[]) => void;
  resetToDefault: () => void;
}

// ─── Default State ─────────────────────────────────────────────────────────────

const buildDefaultContent = (): SiteContent => ({
  eventDetails: EVENT_DETAILS as EventDetails,
  videoLinks: {
    hero: VIDEO_LINKS.hero as VideoLink,
    testimoni: VIDEO_LINKS.testimoni as VideoLink,
    portfolioBatch1: VIDEO_LINKS.portfolioBatch1 as VideoLink,
    portfolioBatch2: VIDEO_LINKS.portfolioBatch2 as VideoLink,
  },
  trustedBrands: TRUSTED_BRANDS as TrustedBrand[],
  aiTools: AI_TOOLS as AiTool[],
  painPoints: REALITA_PAIN_POINTS as PainPoint[],
  programPillars: PROGRAM_PILLARS as ProgramPillar[],
  deliverables: DELIVERABLES,
  speakers: SPEAKERS,
  testimonials: TESTIMONIALS,
  pricingPackages: PRICING_PACKAGES,
  faqItems: FAQ_ITEMS,
});

const STORAGE_KEY = 'maxy_fow_site_content_v1';

// ─── Context ───────────────────────────────────────────────────────────────────

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        const defaults = buildDefaultContent();
        // Deep merge: keep static assets (video/image imports) from defaults
        return {
          ...defaults,
          ...parsed,
          eventDetails: { ...defaults.eventDetails, ...(parsed.eventDetails || {}) },
          videoLinks: {
            hero: { ...defaults.videoLinks.hero, ...(parsed.videoLinks?.hero || {}), videoSrc: defaults.videoLinks.hero.videoSrc, thumbnailSrc: defaults.videoLinks.hero.thumbnailSrc },
            testimoni: { ...defaults.videoLinks.testimoni, ...(parsed.videoLinks?.testimoni || {}), videoSrc: defaults.videoLinks.testimoni.videoSrc, thumbnailSrc: defaults.videoLinks.testimoni.thumbnailSrc },
            portfolioBatch1: { ...defaults.videoLinks.portfolioBatch1, ...(parsed.videoLinks?.portfolioBatch1 || {}), videoSrc: defaults.videoLinks.portfolioBatch1.videoSrc, thumbnailSrc: defaults.videoLinks.portfolioBatch1.thumbnailSrc },
            portfolioBatch2: { ...defaults.videoLinks.portfolioBatch2, ...(parsed.videoLinks?.portfolioBatch2 || {}), videoSrc: defaults.videoLinks.portfolioBatch2.videoSrc, thumbnailSrc: defaults.videoLinks.portfolioBatch2.thumbnailSrc },
          },
          trustedBrands: Array.isArray(parsed.trustedBrands) ? parsed.trustedBrands.map((tb: TrustedBrand) => {
            const defaultTb = defaults.trustedBrands.find(d => d.name === tb.name);
            if (defaultTb && !tb.logo?.startsWith('data:')) return { ...tb, logo: tb.logo || defaultTb.logo };
            return tb;
          }) : defaults.trustedBrands,
          aiTools: Array.isArray(parsed.aiTools) ? parsed.aiTools.map((at: AiTool) => {
            const defaultAt = defaults.aiTools.find(d => d.name === at.name);
            if (defaultAt && !at.logo?.startsWith('data:')) return { ...at, logo: at.logo || defaultAt.logo };
            return at;
          }) : defaults.aiTools,
          painPoints: Array.isArray(parsed.painPoints) ? parsed.painPoints : defaults.painPoints,
          programPillars: Array.isArray(parsed.programPillars) ? parsed.programPillars : defaults.programPillars,
          deliverables: Array.isArray(parsed.deliverables) ? parsed.deliverables : defaults.deliverables,
          speakers: Array.isArray(parsed.speakers) ? parsed.speakers.map((sp: Speaker) => {
            const defaultSp = defaults.speakers.find(d => d.id === sp.id);
            if (defaultSp && !sp.imageUrl?.startsWith('data:')) return { ...sp, imageUrl: sp.imageUrl || defaultSp.imageUrl };
            return sp;
          }) : defaults.speakers,
          testimonials: Array.isArray(parsed.testimonials) ? parsed.testimonials : defaults.testimonials,
          pricingPackages: Array.isArray(parsed.pricingPackages) ? parsed.pricingPackages : defaults.pricingPackages,
          faqItems: Array.isArray(parsed.faqItems) ? parsed.faqItems : defaults.faqItems,
        };
      }
    } catch (e) {
      console.error('Failed to load FoW site content:', e);
    }
    return buildDefaultContent();
  });

  useEffect(() => {
    try {
      const toSave = {
        ...content,
        videoLinks: {
          hero: { ...content.videoLinks.hero, videoSrc: '', thumbnailSrc: '' },
          testimoni: { ...content.videoLinks.testimoni, videoSrc: '', thumbnailSrc: '' },
          portfolioBatch1: { ...content.videoLinks.portfolioBatch1, videoSrc: '', thumbnailSrc: '' },
          portfolioBatch2: { ...content.videoLinks.portfolioBatch2, videoSrc: '', thumbnailSrc: '' },
        },
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch (e) {
      console.error('Failed to save FoW site content:', e);
    }
  }, [content]);

  const updateEventDetails = (data: Partial<EventDetails>) => {
    setContent(prev => ({ ...prev, eventDetails: { ...prev.eventDetails, ...data } }));
  };

  const updateVideoLink = (key: keyof SiteContent['videoLinks'], data: Partial<VideoLink>) => {
    setContent(prev => ({
      ...prev,
      videoLinks: { ...prev.videoLinks, [key]: { ...prev.videoLinks[key], ...data } },
    }));
  };

  const setTrustedBrands = (trustedBrands: TrustedBrand[]) => setContent(prev => ({ ...prev, trustedBrands }));
  const setAiTools = (aiTools: AiTool[]) => setContent(prev => ({ ...prev, aiTools }));
  const setPainPoints = (painPoints: PainPoint[]) => setContent(prev => ({ ...prev, painPoints }));
  const setProgramPillars = (programPillars: ProgramPillar[]) => setContent(prev => ({ ...prev, programPillars }));
  const setDeliverables = (deliverables: Deliverable[]) => setContent(prev => ({ ...prev, deliverables }));
  const setSpeakers = (speakers: Speaker[]) => setContent(prev => ({ ...prev, speakers }));
  const setTestimonials = (testimonials: Testimonial[]) => setContent(prev => ({ ...prev, testimonials }));
  const setPricingPackages = (pricingPackages: PricingPackage[]) => setContent(prev => ({ ...prev, pricingPackages }));
  const setFaqItems = (faqItems: FaqItem[]) => setContent(prev => ({ ...prev, faqItems }));

  const resetToDefault = () => {
    setContent(buildDefaultContent());
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <ContentContext.Provider value={{
      content,
      updateEventDetails,
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
      resetToDefault,
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error('useContent must be used inside ContentProvider');
  return ctx;
};
