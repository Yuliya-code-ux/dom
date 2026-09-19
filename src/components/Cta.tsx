import { SITE, telHref } from "../data/site";

export function CallButton({
  className = "",
  children,
}: {
  className?: string;
  children?: string;
}) {
  return (
    <a href={telHref} className={className}>
      {children ?? SITE.phonePretty}
    </a>
  );
}

export function MaxButton({
  className = "",
  children = "Задать вопрос",
}: {
  className?: string;
  children?: string;
}) {
  return (
    <a href={SITE.maxUrl} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

export function ChooseButton({
  className = "",
  children = "Посмотреть планировки",
}: {
  className?: string;
  children?: string;
}) {
  return (
    <a href="#apartments" className={className}>
      {children}
    </a>
  );
}

export function ContactsButton({
  className = "",
  children = "Узнать об объекте",
}: {
  className?: string;
  children?: string;
}) {
  return (
    <a href="#contacts" className={className}>
      {children}
    </a>
  );
}
