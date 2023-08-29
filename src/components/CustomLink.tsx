import Link from 'next/link';

const CustomLink = (props: React.ComponentPropsWithoutRef<'a'>) =>
  <Link
    className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" target="_blank"
    rel="noreferrer"
    href={props.href ?? ''}
  >
    {props.children}
  </Link>

export default CustomLink