import React from 'react'
import ReactDOM from 'react-dom'
import MusicPlayer from './MusicPlayer'

const playlist = [
  {
    url: '',
    cover: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Mac_Miller_Live_from_Space.jpg',
    title: 'Live From Space',
    artist: [
      'Mac Miler'
    ]
  }
]

ReactDOM.render(<MusicPlayer playlist={playlist} autoplay />, document.getElementById('root'))
