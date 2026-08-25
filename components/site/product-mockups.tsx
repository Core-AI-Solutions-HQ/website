export function SkillBaseMockup() {
  return (
    <svg viewBox="0 0 320 380" role="img" aria-label="SkillBase mobile app mockup" className="h-full w-full">
      <defs>
        <linearGradient id="sb-bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#0F1E38" />
          <stop offset="100%" stopColor="#0A1628" />
        </linearGradient>
        <linearGradient id="sb-glow" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#0ABFBC" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1A4FA0" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect x="60" y="10" width="200" height="360" rx="28" fill="url(#sb-bg)" stroke="#1A4FA0" strokeOpacity="0.4" />
      <rect x="66" y="16" width="188" height="348" rx="22" fill="#0A1628" />
      <rect x="140" y="22" width="40" height="6" rx="3" fill="#1A2740" />
      <text x="80" y="58" fill="#0ABFBC" fontFamily="ui-monospace, monospace" fontSize="7" letterSpacing="1.2">
        SKILLBASE
      </text>
      <text x="80" y="78" fill="#FFFFFF" fontFamily="sans-serif" fontSize="13" fontWeight="600">
        Nearby artisans
      </text>
      <rect x="80" y="88" width="160" height="20" rx="4" fill="#111F38" stroke="#1A2740" />
      <circle cx="90" cy="98" r="3" fill="none" stroke="#5B6B85" strokeWidth="1" />
      <g>
        <rect x="80" y="120" width="160" height="60" rx="6" fill="url(#sb-glow)" stroke="#0ABFBC" strokeOpacity="0.4" />
        <circle cx="98" cy="140" r="10" fill="#0ABFBC" fillOpacity="0.25" stroke="#0ABFBC" strokeWidth="1" />
        <rect x="116" y="132" width="70" height="6" rx="2" fill="#FFFFFF" fillOpacity="0.9" />
        <rect x="116" y="144" width="90" height="4" rx="2" fill="#5B6B85" />
        <rect x="116" y="156" width="42" height="10" rx="3" fill="#0ABFBC" fillOpacity="0.2" stroke="#0ABFBC" strokeOpacity="0.5" />
        <text x="122" y="163" fill="#0ABFBC" fontFamily="ui-monospace, monospace" fontSize="5">
          VERIFIED KYC
        </text>
      </g>
      <g>
        <rect x="80" y="190" width="160" height="60" rx="6" fill="#111F38" stroke="#1A2740" />
        <circle cx="98" cy="210" r="10" fill="#1A4FA0" fillOpacity="0.3" stroke="#1A4FA0" strokeWidth="1" />
        <rect x="116" y="202" width="60" height="6" rx="2" fill="#FFFFFF" fillOpacity="0.85" />
        <rect x="116" y="214" width="88" height="4" rx="2" fill="#5B6B85" />
        <rect x="116" y="226" width="36" height="10" rx="3" fill="#1A4FA0" fillOpacity="0.25" stroke="#1A4FA0" strokeOpacity="0.5" />
        <text x="120" y="233" fill="#8BA8E0" fontFamily="ui-monospace, monospace" fontSize="5">
          ESCROW
        </text>
      </g>
      <g>
        <rect x="80" y="260" width="160" height="60" rx="6" fill="#111F38" stroke="#1A2740" />
        <circle cx="98" cy="280" r="10" fill="#0ABFBC" fillOpacity="0.2" />
        <rect x="116" y="272" width="75" height="6" rx="2" fill="#FFFFFF" fillOpacity="0.85" />
        <rect x="116" y="284" width="82" height="4" rx="2" fill="#5B6B85" />
        <rect x="116" y="296" width="30" height="10" rx="3" fill="#0ABFBC" fillOpacity="0.15" stroke="#0ABFBC" strokeOpacity="0.4" />
        <text x="120" y="303" fill="#0ABFBC" fontFamily="ui-monospace, monospace" fontSize="5">
          AVAILABLE
        </text>
      </g>
      <rect x="80" y="332" width="160" height="24" rx="12" fill="#111F38" stroke="#1A2740" />
      <circle cx="105" cy="344" r="3" fill="#0ABFBC" />
      <circle cx="135" cy="344" r="3" fill="#3A4A6A" />
      <circle cx="165" cy="344" r="3" fill="#3A4A6A" />
      <circle cx="195" cy="344" r="3" fill="#3A4A6A" />
      <circle cx="225" cy="344" r="3" fill="#3A4A6A" />
    </svg>
  );
}

export function TaxBridgeMockup() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="TaxBridge dashboard mockup" className="h-full w-full">
      <defs>
        <linearGradient id="tb-bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#0F1E38" />
          <stop offset="100%" stopColor="#0A1628" />
        </linearGradient>
        <linearGradient id="tb-line" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#0ABFBC" stopOpacity="0" />
          <stop offset="50%" stopColor="#0ABFBC" stopOpacity="1" />
          <stop offset="100%" stopColor="#0ABFBC" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="380" height="280" rx="8" fill="url(#tb-bg)" stroke="#1A2740" />
      <rect x="10" y="10" width="380" height="26" rx="8" fill="#111F38" />
      <circle cx="24" cy="23" r="3" fill="#FF5F57" />
      <circle cx="36" cy="23" r="3" fill="#FEBC2E" />
      <circle cx="48" cy="23" r="3" fill="#28C840" />
      <text x="200" y="26" textAnchor="middle" fill="#5B6B85" fontFamily="ui-monospace, monospace" fontSize="7">
        taxbridge.core.ai
      </text>
      <rect x="10" y="36" width="70" height="254" fill="#0C1A32" />
      <rect x="20" y="52" width="50" height="6" rx="2" fill="#0ABFBC" />
      <rect x="20" y="72" width="42" height="4" rx="2" fill="#3A4A6A" />
      <rect x="20" y="86" width="46" height="4" rx="2" fill="#3A4A6A" />
      <rect x="20" y="100" width="38" height="4" rx="2" fill="#3A4A6A" />
      <rect x="20" y="114" width="44" height="4" rx="2" fill="#3A4A6A" />
      <g>
        <rect x="92" y="50" width="90" height="52" rx="4" fill="#111F38" stroke="#1A2740" />
        <text x="100" y="66" fill="#5B6B85" fontFamily="ui-monospace, monospace" fontSize="6">
          REMITTED
        </text>
        <text x="100" y="86" fill="#0ABFBC" fontFamily="ui-monospace, monospace" fontSize="15" fontWeight="600">
          ₦482M
        </text>
      </g>
      <g>
        <rect x="190" y="50" width="90" height="52" rx="4" fill="#111F38" stroke="#1A2740" />
        <text x="198" y="66" fill="#5B6B85" fontFamily="ui-monospace, monospace" fontSize="6">
          TXN / MIN
        </text>
        <text x="198" y="86" fill="#FFFFFF" fontFamily="ui-monospace, monospace" fontSize="15" fontWeight="600">
          1,204
        </text>
      </g>
      <g>
        <rect x="288" y="50" width="90" height="52" rx="4" fill="#111F38" stroke="#1A2740" />
        <text x="296" y="66" fill="#5B6B85" fontFamily="ui-monospace, monospace" fontSize="6">
          UPTIME
        </text>
        <text x="296" y="86" fill="#0ABFBC" fontFamily="ui-monospace, monospace" fontSize="15" fontWeight="600">
          99.9%
        </text>
      </g>
      <rect x="92" y="114" width="286" height="150" rx="4" fill="#111F38" stroke="#1A2740" />
      <text x="104" y="134" fill="#5B6B85" fontFamily="ui-monospace, monospace" fontSize="6">
        REMITTANCE VOLUME · LAST 30 DAYS
      </text>
      <path
        d="M110 230 L150 210 L190 218 L230 176 L270 188 L310 150 L350 158 L372 140"
        fill="none"
        stroke="url(#tb-line)"
        strokeWidth="2"
      />
      <path d="M110 230 L150 210 L190 218 L230 176 L270 188 L310 150 L350 158 L372 140 L372 248 L110 248 Z" fill="#0ABFBC" fillOpacity="0.08" />
      <rect x="104" y="248" width="70" height="8" rx="2" fill="#0ABFBC" fillOpacity="0.18" />
      <text x="300" y="254" fill="#0ABFBC" fontFamily="ui-monospace, monospace" fontSize="6">
        Live · NRS API healthy
      </text>
    </svg>
  );
}
