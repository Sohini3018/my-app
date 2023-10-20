import * as React from "react"
import { cn } from "../lib/utils"
import isAbsoluteUrl from 'is-absolute-url';

export interface CardProps {
  title?: string;
  icon?: React.ReactNode | string;
  image?: string;
  href?: string;
  mRef?: React.Ref<HTMLDivElement>;
  children?: React.ReactNode;
  // Add any other additional props you want to pass
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({
  title,
  icon,
  image,
  href,
  mRef,
  children,
  ...props
}, ref) => {
  const Component = href ? 'a' : 'div';

  const openLinksInNewTab = isAbsoluteUrl(href ?? '');
  const newTabProps = openLinksInNewTab ? { target: '_blank', rel: 'noreferrer' } : {};

  const isImageSrc: boolean = typeof icon === 'string';

  const renderIcon: JSX.Element = (
    <>
      {icon ? (
        isImageSrc ? (
          <img src={icon as string} alt={title} className="h-6 w-6 object-cover object-center" />
        ) : (
          <div className="h-6 w-6 fill-slate-800 dark:fill-slate-100 text-slate-800 dark:text-slate-100">
            {icon}
          </div>
        )
      ) : null}
    </>
  );

  return (
    <Component
      className={cn(
        'block not-prose font-normal group relative my-2 ring-2 ring-transparent rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden w-full',
        href && 'cursor-pointer',
        
      )}
      {...newTabProps}
      {...props}
    >
      {image && <img src={image} alt={image} className="w-full h-64 object-cover object-center" />}
      <div className="px-6 py-5">
        {renderIcon}
        <h2
          className={cn(
            'font-semibold text-base text-slate-800 dark:text-white',
            icon !== null && icon !== undefined && 'mt-4'
          )}
        >
          {title}
        </h2>
        <span
          className={cn(
            'mt-1 font-normal',
            title ? 'text-slate-600 dark:text-slate-400' : 'text-slate-700 dark:text-slate-300'
          )}
        >
          {children}
        </span>
      </div>
    </Component>
  );
});

Card.displayName = "Card";

export default Card;
