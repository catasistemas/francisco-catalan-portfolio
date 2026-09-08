import PeoplePlatformCase from '../../components/people-platform-case';
import { peoplePlatformMetadata } from '../../case-studies/people-platform';

export const metadata = peoplePlatformMetadata('es');

export default function PeoplePlatformPage() {
  return <PeoplePlatformCase language="es" />;
}
