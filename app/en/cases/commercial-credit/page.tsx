import CommercialCreditCase from '../../../components/commercial-credit-case';
import { commercialCreditMetadata } from '../../../case-studies/commercial-credit';

export const metadata = commercialCreditMetadata('en');

export default function CommercialCreditPage() {
  return <CommercialCreditCase language="en" />;
}
