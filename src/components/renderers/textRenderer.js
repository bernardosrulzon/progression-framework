import * as React from 'react'
import toTitleCase from '../../utils/toTitleCase'
import { Card, MarkdownContent, PrimaryView, Subtitle, Title } from '../styles'

export default class TextRenderer extends React.Component {
  render() {
    const { data, html } = this.props
    return (
      <PrimaryView>
        <Subtitle small>
          {data.sidebarGroup != null ? toTitleCase(data.sidebarGroup) : null}
        </Subtitle>
        <Title small>{data.title}</Title>
        <Card>
          <MarkdownContent dangerouslySetInnerHTML={{ __html: html }} />
        </Card>
      </PrimaryView>
    )
  }
}
