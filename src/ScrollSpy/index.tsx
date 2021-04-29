import { RefObject } from 'react';
import { useScrollSpy } from './useScrollSpy';

export const ScrollSpy = ({
  children,
  sectionRefs,
}: {
  children: ({
    elementsStatusInViewport,
    currentElementInViewport,
  }: {
    elementsStatusInViewport: boolean[];
    currentElementInViewport: number;
  }) => JSX.Element;
  sectionRefs: RefObject<Element>[];
}) => {
  const { elementsStatusInViewport, currentElementInViewport } = useScrollSpy({
    sectionRefs,
  });

  return children({
    elementsStatusInViewport,
    currentElementInViewport,
  });
};
