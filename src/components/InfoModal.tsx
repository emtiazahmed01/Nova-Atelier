import React from 'react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  onClose,
  title,
  content
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 sm:p-8 z-10 border border-[#eeeeed]">
        <div className="flex items-center justify-between pb-3 border-b border-[#eeeeed]">
          <h3 className="font-headline-sm text-[20px] text-black font-medium">
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full text-[#47464b] hover:bg-[#eeeeed] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="py-4 text-[#47464b] font-body-md text-[14px] leading-relaxed">
          {content}
        </div>

        <div className="pt-3 border-t border-[#eeeeed] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-black text-white font-label-caps text-[11px] uppercase tracking-wider hover:bg-[#9d431f] transition-colors"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
