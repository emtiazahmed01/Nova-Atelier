import React from 'react';

interface ToastProps {
  visible: boolean;
  message: string;
  subMessage?: string;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  visible,
  message,
  subMessage,
  onClose
}) => {
  return (
    <div
      onClick={onClose}
      className={`fixed bottom-6 right-6 z-[160] flex items-center gap-3 bg-[#000000] text-white px-5 py-3.5 rounded-xl shadow-2xl transition-all duration-300 cursor-pointer ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <span className="material-symbols-outlined text-[#fe8c62] text-[22px]">
        check_circle
      </span>
      <div>
        <p className="font-label-caps text-[11px] uppercase tracking-wider text-[#ffdbcf] font-semibold">
          {message}
        </p>
        {subMessage && (
          <p className="font-body-sm text-[13px] text-white font-normal mt-0.5">
            {subMessage}
          </p>
        )}
      </div>
    </div>
  );
};
