import { CORE_CONCEPTS } from '../../assets/data.js';
import CoreConcept from './CoreConcept.jsx';
import Section from '../Section.jsx';
export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Time to get started!">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => <CoreConcept {...conceptItem} />)}
      </ul>
    </Section>
  );
}
