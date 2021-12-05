import TableCell from '@mui/material/TableCell';
import DiamondIcon from '@mui/icons-material/Diamond';
import AssetsViewModel from '../AssetsViewModel';

interface Props {
  viewModel: AssetsViewModel;
  name: string;
}

const AssetsTableViewWatchList: React.FC<Props> = (props) => {
  const { viewModel, name } = props;
  return (
    <TableCell
      component="th"
      scope="row"
      onClick={() => viewModel.add_to_watchlist(name)}
    >
      <DiamondIcon sx={{ color: 'gray', cursor: 'pointer' }}></DiamondIcon>
    </TableCell>
  );
};
export default AssetsTableViewWatchList;
