declare module "lucide-react" {
  import type { FC, SVGProps } from "react";

  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    strokeWidth?: string | number;
    absoluteStrokeWidth?: boolean;
  }

  export type LucideIcon = FC<LucideProps>;

  export const BrainCircuit: LucideIcon;
  export const Building2: LucideIcon;
  export const Compass: LucideIcon;
  export const Cpu: LucideIcon;
  export const CreditCard: LucideIcon;
  export const Globe: LucideIcon;
  export const Handshake: LucideIcon;
  export const Landmark: LucideIcon;
  export const Layers: LucideIcon;
  export const LineChart: LucideIcon;
  export const MapPin: LucideIcon;
  export const Maximize2: LucideIcon;
  export const Menu: LucideIcon;
  export const Rocket: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const Smartphone: LucideIcon;
  export const Timer: LucideIcon;
  export const TrendingUp: LucideIcon;
  export const X: LucideIcon;
}
