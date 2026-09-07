import CollectionsCase from '../../components/collections-case';
import { collectionsMetadata } from '../../case-studies/collections';

export const metadata = collectionsMetadata('es');

export default function CollectionsPage() {
  return <CollectionsCase language="es" />;
}
