/**
 * Frontpage.jsx
 * FrontPage Section
 * Finalized for v1.0.0 release
 * Last Updated: 09/26
 */

import { layout } from '../../_config/layout';
import Background from './content/components/Background';
import Content from './content/Content';

export default function Frontpage({ section }) {
  return (
    <div className={layout.page}>
      <Background />
      <Content section={section} />
    </div>
  );
}
