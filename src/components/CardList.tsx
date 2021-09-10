import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { onOpen, isOpen, onClose } = useDisclosure();

  // TODO SELECTED IMAGE URL STATE
  const [selectedImage, setSelectedImage] = useState<string>('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(cardUrl: string): void {
    setSelectedImage(cardUrl);
    onOpen();
  }

  return (
    <>
      <SimpleGrid columns={3} spacing="10">
        {cards.map(card => (
          <Card data={card} viewImage={() => handleViewImage(card.url)} />
        ))}
      </SimpleGrid>

      <ModalViewImage
        onClose={onClose}
        isOpen={isOpen}
        imgUrl={selectedImage}
      />
    </>
  );
}
