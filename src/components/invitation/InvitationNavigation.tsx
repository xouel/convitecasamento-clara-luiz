import { MapPin, CheckCircle, Gift } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import NavigationButton from "./NavigationButton";

export default function InvitationNavigation() {
  return (
    <nav
      aria-label="Ações do convite"
      className="flex flex-row items-start justify-center gap-2 sm:gap-6 w-full max-w-sm mx-auto pt-4 pb-2"
    >
      <NavigationButton
        href={weddingConfig.location.mapsUrl}
        icon={MapPin}
        label={weddingConfig.navigation.labels.directions}
      />
      <NavigationButton
        href={weddingConfig.rsvp.url}
        icon={CheckCircle}
        label={weddingConfig.navigation.labels.rsvp}
      />
      <NavigationButton
        href={weddingConfig.gifts.url}
        icon={Gift}
        label={weddingConfig.navigation.labels.gifts}
      />
    </nav>
  );
}
