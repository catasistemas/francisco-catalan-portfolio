import DocumentLibraryCase from '../../../components/document-library-case';
import { documentLibraryMetadata } from '../../../case-studies/document-library';

export const metadata = documentLibraryMetadata('en');

export default function DocumentLibraryPage() {
  return <DocumentLibraryCase language="en" />;
}
