import { IconContainer } from './styles';

interface CircularIconProps {
  Icon: React.FC;
  backGroundColor: 'yellow' | 'gray' | 'orange' | 'purple'
}

export function CircularIcon({backGroundColor ,Icon} : CircularIconProps) {
  return (
    <IconContainer color={backGroundColor}>
      <Icon />
    </IconContainer>
  )
}