import { Group } from "./Group";

export class GroupManager {
  private static groups: Map<number, Group> = new Map();

  static addGroup(group: Group): void {
    GroupManager.groups.set(group.id, group);
  }

  static getGroup(groupId: number): Group | undefined {
    return GroupManager.groups.get(groupId);
  }

  static getGroupMembers(groupId: number) {
    const group = GroupManager.getGroup(groupId);
    if (!group) {
      throw new Error(`Group with ID ${groupId} not found`);
    }
    return group.getMembers();
  }

  removeGroup(groupId: number): void {
    GroupManager.groups.delete(groupId);
  }

  listAllGroups(): Group[] {
    return Array.from(GroupManager.groups.values());
  }
}
