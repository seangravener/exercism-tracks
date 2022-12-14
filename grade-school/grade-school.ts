interface IRoster {
  [key: number]: string[];
}

class Roster {
  private roster: IRoster = {};

  public setRoster(grade: number, names: string[] = []): void {
    this.roster[grade] = this.roster[grade] || [];
    this.addStudentsToRoster(grade, names);
  }

  public getRoster(): IRoster {
    const roster = { ...this.roster };
    for (let grade in roster) {
      roster[grade] = [...roster[grade]];
    }

    return roster;
  }

  private addStudentsToRoster(grade: number, names: string[]): void {
    const enrolledIn = this.checkEnrolled(names);
    if (enrolledIn > 0) {
      this.removeStudentsFromRoster(enrolledIn, names);
    }

    this.roster = {
      ...this.roster,
      [grade]: [...this.roster[grade], ...names].sort(),
    };
  }

  private removeStudentsFromRoster(grade: number, names: string[]): void {
    this.roster[grade] = this.roster[grade].filter(
      (current) => !names.includes(current)
    );
  }

  private checkEnrolled(names: string[]): number {
    let enrolledIn = 0;
    for (let grade in this.roster) {
      const isEnrolled = Boolean(
        this.roster[grade].filter((current) => {
          return names.includes(current);
        }).length
      );

      if (isEnrolled) {
        enrolledIn = parseInt(grade, 10);
      }
    }

    return enrolledIn;
  }
}

export class GradeSchool {
  private _roster: Roster;

  constructor() {
    this._roster = new Roster();
  }

  public add(name: string, grade: number): void {
    this._roster.setRoster(grade, [...this.grade(grade), name]);
  }

  public roster(): IRoster {
    return this._roster.getRoster();
  }

  public grade(grade: number): string[] {
    return this.getGrade(grade);
  }

  private getGrade(grade: number): string[] {
    return this.roster()[grade] ? [...this.roster()[grade]] : [];
  }
}
