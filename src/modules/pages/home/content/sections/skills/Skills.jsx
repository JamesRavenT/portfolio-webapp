/**
 * Skills.jsx
 * Skills Section
 * Finalized for v1.0.0 release
 * Last Updated: 09/27
 */

import { layout } from '../../_config/layout';
import Content from './content/Content';
import Background from './content/components/Background';
export default function Skills() {
  return (
    <div className={layout.page}>
      <Background />
      <Content />
    </div>
  );
}
