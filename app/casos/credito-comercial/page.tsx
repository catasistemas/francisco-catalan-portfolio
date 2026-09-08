import CommercialCreditCase from '../../components/commercial-credit-case';
import { commercialCreditMetadata } from '../../case-studies/commercial-credit';

export const metadata = commercialCreditMetadata('es');

export default function CommercialCreditPage() {
  return <CommercialCreditCase language="es" />;
}
