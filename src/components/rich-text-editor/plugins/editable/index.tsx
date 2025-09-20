interface Props {
  isEditable: boolean;
}

/**
 * @description
 * editable plugin
 */
const EditablePlugin = ({ isEditable }: Props) => {
  if (isEditable) return null;
  return null;
};

export default EditablePlugin;
