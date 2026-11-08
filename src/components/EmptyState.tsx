import { FolderSearch } from "lucide-react";
import type React from "react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = "Kayıt Bulunamadı",
  description = "Seçilen kriterlere uygun herhangi bir proje vitrinde yer almıyor.",
  actionText,
  onAction,
}) => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center p-12 text-center rounded-lg border border-hairline bg-surface/50 backdrop-blur-sm max-w-lg mx-auto"
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-brand/10 border border-brand/20 text-brand mb-4">
        <FolderSearch className="w-6 h-6" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-ink mb-2">{title}</h3>
      <p className="text-sm text-ink-muted max-w-sm mb-6 leading-relaxed">{description}</p>
      {actionText && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="px-4 py-2 text-xs font-medium text-canvas bg-brand hover:bg-brand-hover active:bg-brand-active rounded-md shadow-button transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};
