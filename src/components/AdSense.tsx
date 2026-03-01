"use client";

import { useEffect } from "react";

interface AdSenseProps {
    adSlot: string;
    adFormat?: "auto" | "fluid" | "rectangle";
    style?: React.CSSProperties;
    className?: string;
    minHeight?: string;
}

/**
 * Radiant Reader AdSense Component
 * - CLS(Cumulative Layout Shift) 방지를 위해 최소 높이(min-height)를 미리 확보합니다.
 * - 실제 배포 시 window.adsbygoogle 호출 로직을 활성화합니다.
 */
export default function AdSense({
    adSlot,
    adFormat = "auto",
    style,
    className = "",
    minHeight = "100px",
}: AdSenseProps) {
    useEffect(() => {
        try {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error("AdSense Error:", err);
        }
    }, []);

    return (
        <div
            className={`w-full overflow-hidden flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-dashed border-slate-200 dark:border-slate-800 my-8 ${className}`}
            style={{ minHeight, ...style }}
        >
            <ins
                className="adsbygoogle"
                style={{ display: "block", width: "100%", height: "100%" }}
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // 실제 클라이언트 ID로 교체 필요
                data-ad-slot={adSlot}
                data-ad-format={adFormat}
                data-full-width-responsive="true"
            />
            {/* Mock label for development/verification */}
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-2">
                Advertisement
            </span>
        </div>
    );
}
