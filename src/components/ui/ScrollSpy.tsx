"use client";

export default function ScrollSpy({
  navbar,
  children,
}: {
  navbar: React.ReactElement;
  children: React.ReactElement[];
}) {
  const sections = children.map((child, index) => {
    return <child.type key={index + child.props.id} {...child.props} />;
  });

  return (
    <>
      {navbar}
      {sections}
    </>
  );
}
