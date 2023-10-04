"use client";

export default function ScrollSpy({
  navbar,
  children,
}: {
  navbar: React.ReactElement;
  children: React.ReactElement[];
}) {
  const sections = children.map((child) => {
    return <child.type {...child.props} />;
  });
  return (
    <>
      {navbar}
      {sections}
    </>
  );
}
