"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { FAQ } from "@/lib/types";
import { cn } from "@/lib/utils";

type FAQAccordionProps = {
  items: FAQ[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <article key={item.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <button
              aria-controls={`faq-panel-${item.id}`}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpenId(open ? null : item.id)}
              type="button"
            >
              <span className="font-semibold text-ink">{item.question}</span>
              <ChevronDown className={cn("h-5 w-5 text-slate-500 transition", open ? "rotate-180" : "")} />
            </button>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  id={`faq-panel-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
