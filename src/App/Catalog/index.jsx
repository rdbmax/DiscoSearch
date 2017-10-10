import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoaderCircles from 'react-canvas-loaders/dist/loader-circles';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './Catalog.css';
import withConnect from './withConnect';

const CONTAINER_STYLE = {
  height: 'calc(100vh - 95px)',
  marginTop: '10px',
};

const TABLE_STYLE = {
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  fontFamily: 'Oswald, sans-serif',
  color: 'white',
};

const LOADER_STYLE = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  borderRadius: '50%',
  padding: '50px',
  transform: 'translate(-50%, -50%)',
  zIndex: '1',
}

const dataGridColumns = [{
  Header: 'Titre',
  accessor: 'title',
}, {
  Header: 'Artiste',
  accessor: d => d.artist.name,
  id: 'artistName',
}, {
  Header: 'Album',
  accessor: d => d.album.title,
  id: 'albumTitle',
}];

@withConnect
class Catalog extends Component {
  static propTypes = {
    isSearching: PropTypes.bool.isRequired,
    isFull: PropTypes.bool.isRequired,
    songs: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
    })).isRequired,
    fetchNextSongs: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.scrollableTable = document.querySelector('.rt-tbody');
    this.scrollableTable.onscroll = this.onScroll;
  }

  onScroll = () => {
    if (
      this.scrollableTable.scrollHeight === this.scrollableTable.clientHeight + this.scrollableTable.scrollTop
      && !this.props.isFull
    ) {
      this.props.fetchNextSongs();
    }
  }

  render() {
    const { isSearching, songs } = this.props;

    return (
      <div style={CONTAINER_STYLE}>
        <ReactTable
          data={songs}
          columns={dataGridColumns}
          showPagination={false}
          pageSize={songs.length}
          style={TABLE_STYLE}
          NoDataComponent={() => null}
        />
        { isSearching &&
          <div style={LOADER_STYLE}>
            <LoaderCircles colorCircles='rgba(0, 0, 0, 0.2)' />
          </div> }
      </div>
    );
  }
}

export default Catalog;
