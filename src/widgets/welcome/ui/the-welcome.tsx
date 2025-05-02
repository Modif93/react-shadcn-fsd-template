import { Label } from '@/shared/ui';
import { CountLabel } from '@/features/count-label';
import { IncCountButton } from '@/features/inc-count';

function TheWelcome() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Label> Welcome! </Label>
      <CountLabel />
      <IncCountButton />
    </div>
  );
}

export default TheWelcome;
