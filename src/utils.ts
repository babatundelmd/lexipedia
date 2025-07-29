export const addClass = (element?: HTMLElement | null, ...classes: string[]) => {
  element?.classList.add(...classes);
};

export const removeClass = (element?: HTMLElement | null, ...classes: string[]) => {
  element?.classList.remove(...classes);
};

export const showAlert = ({
  msg,
  bgColor,
  textColor,
  zIndex = '0',
  duration = 3000,
}: AlertProps) => {
  const alertDiv: HTMLDivElement = document.createElement('div');
  alertDiv.className = 'alert';
  addClass(
    alertDiv,
    'p-4',
    'mb-8',
    'fixed',
    'w-max',
    'left-1/2',
    'z-9999',
    'text-base',
    'shadow-lg',
    'rounded-md',
    'text-white',
    'ease-in-out',
    'text-center',
    'max-w-[80vw]',
    'duration-500',
    'bg-primary',
    'font-semibold',
    'transition-all',
    '-translate-x-1/2',
    'tracking-[0.04em]'
  );

  alertDiv.style.bottom = '-150px';
  document.body.appendChild(alertDiv);

  setTimeout(() => {
    if (bgColor) alertDiv.style.background = bgColor;
    if (textColor) alertDiv.style.color = textColor;
    alertDiv.innerHTML = msg;
    alertDiv.style.bottom = '0px';

    if (zIndex !== '0') alertDiv.style.zIndex = zIndex;

    setTimeout(() => {
      alertDiv.style.bottom = '-150px';
      setTimeout(() => document.body.removeChild(alertDiv), 1000);
    }, duration);
  }, 200);
};
