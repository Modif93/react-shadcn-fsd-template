import { useCountStore } from '@/entities/count';
import { Label } from '@/shared/ui';

function CountLabel() {
  const { count } = useCountStore();
  return <Label>현재 값 : {count.num}</Label>;
}

export default CountLabel;
