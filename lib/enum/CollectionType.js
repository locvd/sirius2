/**
 * Created by locvd on 2017/10/28.
 */

const ALL_MEMBER = "allMembers";
const SINGLE_MEMBER = "singleMember";
const PUBLIC_MEMBER = "publicMembers";
const FILTERED_ALL_MEMBER = "filteredAllMembers";
const FILTERED_PUBLIC_MEMBER = "fileredPublicMembers";
const ALL_ACTIVITY = "allActivities";
const PUBLIC_ACTIVITY = "publicActivities";

const CollectionType = {
  allCollectionTypes : [ALL_MEMBER, SINGLE_MEMBER, PUBLIC_MEMBER, FILTERED_ALL_MEMBER, FILTERED_PUBLIC_MEMBER, ALL_ACTIVITY],
  ALL_MEMBER: ALL_MEMBER,
  SINGLE_MEMBER: SINGLE_MEMBER,
  PUBLIC_MEMBER: PUBLIC_MEMBER,
  FILTERED_ALL_MEMBER: FILTERED_ALL_MEMBER,
  FILTERED_PUBLIC_MEMBER: FILTERED_PUBLIC_MEMBER,
  ALL_ACTIVITY: ALL_ACTIVITY
};

export default CollectionType;