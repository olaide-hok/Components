import React from 'react'
import Accordion from '../components/Accordion'

function AccordionPage() {
  const items = [
    {
      id: 'qwerty',
      label: 'Can I use React on a project?',
      content: 'You can use React on any project you want.',
    },
    {
      id: 'poiur',
      label: 'Can I use JavaScript on a project?',
      content: 'You can use JavaScript on any project you want.',
    },
    {
      id: 'vbnmm',
      label: 'Can I use CSS on a project?',
      content: 'You can use CSS on any project you want.',
    },
  ]
  return <Accordion items={items} />
}

export default AccordionPage
