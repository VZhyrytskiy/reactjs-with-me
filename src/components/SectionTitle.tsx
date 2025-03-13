import { PropsWithChildren } from "react";

type SectionTitleProps = PropsWithChildren<{
    id: string;
}>;

function SectionTitle(props: SectionTitleProps) {
  const { id, children } = props;
    console.log(children);
  return (
    <section id={id}>{children}</section>
  )
}

export default SectionTitle;