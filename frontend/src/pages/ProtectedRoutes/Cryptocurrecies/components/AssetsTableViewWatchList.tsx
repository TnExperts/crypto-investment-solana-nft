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
      onClick={() => viewModel.watchList(name)}
    >
      <DiamondIcon
        sx={{ color: 'gray', cursor: 'pointer' }}
        // onClick={() => {
        // 	viewModel.setSelectedAsset(asset);
        // }}
      ></DiamondIcon>
    </TableCell>
  );
};
export default AssetsTableViewWatchList;
