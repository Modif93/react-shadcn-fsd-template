import { Button } from '@/shared/ui';
import { useCountStore } from '@/entities/count';

function IncCountButton() {
  const { increment } = useCountStore();
  return <Button onClick={() => increment()}>increase count</Button>;
}

export default IncCountButton;
